from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

# Настройка подключения к PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'postgresql://postgres:root@localhost:5432/visa_express')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

from flask_migrate import Migrate
migrate = Migrate(app, db)

# Пример модели заявки
class Application(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(80), nullable=False)
    phone = db.Column(db.String(20), nullable=False)
    status = db.Column(db.String(20), default='pending')

@app.route('/api/apply', methods=['POST'])
def apply():
    data = request.json
    name = data.get('name')
    phone = data.get('phone')
    if not name or not phone:
        return jsonify({'error': 'Missing name or phone'}), 400
    application = Application(name=name, phone=phone)
    db.session.add(application)
    db.session.commit()
    return jsonify({'message': 'Заявка успешно отправлена!'}), 201

@app.route('/api/applications', methods=['GET'])
def get_applications():
    applications = Application.query.all()
    return jsonify([
        {'id': a.id, 'name': a.name, 'phone': a.phone, 'status': a.status}
        for a in applications
    ])

if __name__ == '__main__':
    app.run(debug=True)
