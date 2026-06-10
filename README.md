# TCIT Challenge - Gestor de Posts

Aplicación web para gestionar posts con React + Redux en el frontend y Flask + PostgreSQL en el backend.

## Backend

```bash
cd backend
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
```

Crea un archivo `.env` con tus credenciales:
DB_HOST=localhost
DB_PORT=5432
DB_NAME=tcit_posts
DB_USER=postgres
DB_PASSWORD=tu_contraseña

Corre el servidor:
```bash
python app.py
```

## Frontend

```bash
cd frontend
npm install
npm start
```