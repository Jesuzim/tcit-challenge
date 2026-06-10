# TCIT Challenge - Gestor de Posts

Aplicación web para gestionar posts con React + Redux en el frontend 
y Flask + PostgreSQL en el backend.

## Tecnologías utilizadas

- **Frontend:** React, Redux Toolkit, Axios
- **Backend:** Python, Flask, Flask-CORS
- **Base de datos:** PostgreSQL
- **Control de versiones:** Git / GitHub

## Funcionalidades

- Crear posts con nombre y descripción
- Eliminar posts
- Listar todos los posts
- Filtrar posts por nombre localmente (sin llamar a la API)
- La lista se carga una sola vez al iniciar la vista

## Estructura del proyecto
tcit-challenge/
├── backend/
│   ├── app.py
│   ├── database.py
│   └── requirements.txt
└── frontend/
└── src/
├── store/
│   ├── index.js
│   └── postsSlice.js
└── components/
├── PostForm.jsx
├── PostFilter.jsx
└── PostList.jsx

## Instalación y uso

### Backend

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

### Frontend

```bash
cd frontend
npm install
npm start
```

## Proceso de desarrollo

Desarrollé este challenge de forma autónoma, tomando las decisiones 
de arquitectura y estructura del proyecto Bansadome en el PDF proporcionado. Utilicé IA (Claude) como herramienta de apoyo para:

- Resolver errores puntuales (como configuración de PostgreSQL en Windows)
- Aclarar conceptos que no tenía del todo claros (como el flujo de Redux)
- Verificar que mis decisiones de diseño eran correctas
- Enriquecer más el README
- Ayuda en el seguimiento del código