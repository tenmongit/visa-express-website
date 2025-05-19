# visa-express-website

A modern web application for managing visa requests and tours.

## Features
- User registration, login, logout
- Personal user profile
- Admin panel for managing applications
- Application submission and export to Excel
- Responsive UI with Next.js and Chakra UI

## Technologies
- Frontend: Next.js, React, Chakra UI
- Backend: Flask, SQLAlchemy, PostgreSQL

## Getting Started

### Backend (Flask)

1. **Install dependencies:**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```
2. **Set up environment variables:**
   - Create a `.env` file (optional).
3. **Run migrations:**
   ```bash
   flask db upgrade
   ```
4. **Start backend server:**
   ```bash
   flask run
   # or
   python app.py
   ```

### Frontend (Next.js)

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn
   ```
2. **Start development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

### Running Tests
- Backend: `pytest` in the `backend` directory.

### Export Applications to Excel
- Use the admin panel export button or run `export_applications.py` script in backend.

---

## Project Structure
- `/backend` - Flask backend
- `/pages` - Next.js pages (frontend)
- `/components` - React UI components
- `/styles` - Theme and global styles
