from flask import Flask, request, jsonify, session
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
# Settings for working with sessions between frontend and backend
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'
app.config['SESSION_COOKIE_SECURE'] = False  # For local development, for production set to True and use https
CORS(app, supports_credentials=True, origins=['http://localhost:3000'])

# PostgreSQL connection setup
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://postgres:root@localhost:5432/visa_express')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from flask_migrate import Migrate
migrate = Migrate(app, db)

# Endpoint to get current user data
@app.route('/api/me', methods=['GET'])
def get_current_user():
    user_id = session.get('user_id')
    if not user_id:
        return jsonify({'error': 'Не авторизован'}), 401
    user = User.query.get(user_id)
    if not user:
        return jsonify({'error': 'Пользователь не найден'}), 404
    return jsonify({
        'email': user.email,
        'first_name': user.first_name,
        'last_name': user.last_name,
        'phone': user.phone
    })

# Example Application model
class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    email = db.Column(db.String(120))
    comment = db.Column(db.Text)
    country = db.Column(db.String(80))
    date_from = db.Column(db.Date)
    date_to = db.Column(db.Date)
    adults = db.Column(db.Integer)
    children = db.Column(db.Integer)
    accommodation = db.Column(db.String(50))
    status = db.Column(db.String(20), default='pending')

@app.route('/api/apply', methods=['POST'])
def apply():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    if not name or not phone:
        return jsonify({'error': 'Missing name or phone'}), 400
    application = Application(
        name=name,
        phone=phone,
        email=data.get('email'),
        comment=data.get('comment'),
        country=data.get('country'),
        date_from=data.get('date_from'),
        date_to=data.get('date_to'),
        adults=data.get('adults'),
        children=data.get('children'),
        accommodation=data.get('accommodation')
    )
    db.session.add(application)
    db.session.commit()
    return jsonify({'message': 'Заявка успешно отправлена!'}), 201

from flask import send_file, session
from werkzeug.security import generate_password_hash, check_password_hash
import pandas as pd
import io
import secrets

# User model for authentication
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    first_name = db.Column(db.String(80), nullable=False)
    last_name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    password_hash = db.Column(db.String(512), nullable=False)

# Helper: login required decorator
from functools import wraps

def login_required(f):
    @wraps(f)
    def decorated_function(*args, **kwargs):
        if not session.get('user_id'):
            return jsonify({'error': 'Authentication required'}), 401
        return f(*args, **kwargs)
    return decorated_function

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    print('REGISTER DATA:', data)
    email = data.get('email')
    password = data.get('password')
    first_name = data.get('first_name')
    last_name = data.get('last_name')
    phone = data.get('phone')
    if not email or not password or not first_name or not last_name or not phone:
        print('REGISTER ERROR: missing field')
        return jsonify({'error': 'Необходимо заполнить все поля'}), 400
    if User.query.filter_by(email=email).first():
        print('REGISTER ERROR: user exists')
        return jsonify({'error': 'Пользователь с таким email уже существует'}), 400
    try:
        user = User(email=email, first_name=first_name, last_name=last_name, phone=phone, password_hash=generate_password_hash(password))
        db.session.add(user)
        db.session.commit()
        print('REGISTER SUCCESS:', email)
        return jsonify({'message': 'Пользователь успешно зарегистрирован'})
    except Exception as e:
        print('REGISTER DB ERROR:', e)
        db.session.rollback()
        return jsonify({'error': 'Ошибка регистрации'}), 500

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    if not email or not password:
        return jsonify({'error': 'Необходимо ввести email и пароль'}), 400
    user = User.query.filter_by(email=email).first()
    if not user or not check_password_hash(user.password_hash, password):
        return jsonify({'error': 'Неверный email или пароль'}), 401
    session['user_id'] = user.id  # save user id in session
    session['csrf_token'] = secrets.token_hex(16)
    return jsonify({'message': 'Вход выполнен успешно'})

@app.route('/api/logout', methods=['POST'])
def logout():
    session.pop('user_id', None)
    session.pop('csrf_token', None)
    return jsonify({'message': 'Logged out'})

@app.route('/api/applications', methods=['GET'])
@login_required
def get_applications():
    applications = Application.query.all()
    return jsonify([
        {
            'id': a.id,
            'name': a.name,
            'phone': a.phone,
            'email': a.email,
            'comment': a.comment,
            'country': a.country,
            'date_from': a.date_from.isoformat() if a.date_from else None,
            'date_to': a.date_to.isoformat() if a.date_to else None,
            'adults': a.adults,
            'children': a.children,
            'accommodation': a.accommodation,
            'status': a.status
        }
        for a in applications
    ])

@app.route('/api/applications/<int:app_id>/status', methods=['PATCH'])
@login_required
def update_application_status(app_id):
    application = Application.query.get_or_404(app_id)
    data = request.json
    status = data.get('status')
    if status not in ['pending', 'approved', 'denied']:
        return jsonify({'error': 'Invalid status'}), 400
    application.status = status
    db.session.commit()
    return jsonify({'message': 'Status updated'})

@app.route('/api/export', methods=['GET'])
@login_required
def export_excel():
    apps = Application.query.all()
    data = [{
        'id': a.id,
        'name': a.name,
        'phone': a.phone,
        'email': a.email,
        'comment': a.comment,
        'country': a.country,
        'date_from': a.date_from,
        'date_to': a.date_to,
        'adults': a.adults,
        'children': a.children,
        'accommodation': a.accommodation,
        'status': a.status
    } for a in apps]
    df = pd.DataFrame(data)
    output = io.BytesIO()
    df.to_excel(output, index=False)
    output.seek(0)
    return send_file(output, download_name='applications.xlsx', as_attachment=True)

if __name__ == '__main__':
    app.secret_key = os.getenv('SECRET_KEY', 'dev-secret')
    app.run(debug=True)
