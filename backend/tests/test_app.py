import pytest
import sys
import os
sys.path.append(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
from app import app, db, Application

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        with app.app_context():
            db.create_all()
        yield client
        with app.app_context():
            db.drop_all()


def test_apply_success(client):
    response = client.post('/api/apply', json={"name": "Test User", "phone": "+77001234567"})
    assert response.status_code == 201
    assert 'успешно' in response.get_json()['message']


def test_apply_missing_fields(client):
    response = client.post('/api/apply', json={"name": "Test User"})
    assert response.status_code == 400
    assert 'error' in response.get_json()


def test_get_applications(client):
    # Сначала добавим заявку
    client.post('/api/apply', json={"name": "Test User", "phone": "+77001234567"})
    response = client.get('/api/applications')
    assert response.status_code == 200
    data = response.get_json()
    assert isinstance(data, list)
    assert any(app['name'] == "Test User" for app in data)
