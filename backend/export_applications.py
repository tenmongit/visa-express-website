import pandas as pd
from app import app, db, Application

# Script for exporting all applications to Excel

def export_to_excel(filename='applications.xlsx'):
    with app.app_context():
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
        df.to_excel(filename, index=False)
        print(f"Экспортировано {len(df)} заявок в файл {filename}")

if __name__ == '__main__':
    export_to_excel()
