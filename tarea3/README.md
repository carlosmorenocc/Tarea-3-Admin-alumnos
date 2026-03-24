# Aplicación CRUD de Alumnos

Esta es una aplicación web para administrar alumnos usando Node.js, Express, MongoDB y Express Handlebars.

## Requisitos

- Node.js
- MongoDB

## Instalación

1. Clona el repositorio.
2. Instala las dependencias: `npm install`
3. Asegúrate de que MongoDB esté corriendo en `mongodb://localhost:27017/alumnosDB`
4. Ejecuta la aplicación: `npm start`
5. Abre tu navegador en `http://localhost:3000`

## Funcionalidades

- Listar alumnos
- Crear nuevo alumno
- Editar alumno existente
- Eliminar alumno lógicamente (no se muestra en la lista)

## Estructura del Proyecto

- `app.js`: Archivo principal del servidor
- `models/Alumno.js`: Modelo de datos para Alumno
- `routes/alumnos.js`: Rutas para operaciones CRUD
- `views/`: Plantillas Handlebars
- `public/`: Archivos estáticos (CSS, JS, etc.)