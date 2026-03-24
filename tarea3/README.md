# Tarea-3-Admin-alumnos

Aplicación web CRUD de gestión de alumnos:
- create/read/update/delete con eliminación lógica (`isDeleted`).
- UI con Express Handlebars.
- Base de datos MongoDB.


# Instrucciones para ejecutar la aplicación
1. Clonar el repositorio y moverse al proyecto:
   ```bash
   git clone <URL-del-repo>
   cd tarea3
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Configurar MongoDB en `.env` (opcional):
   ```bash
   MONGODB_URI=mongodb://localhost:27017/alumnosDB
   PORT=3000
   ```
4. Ejecutar app en desarrollo:
   ```bash
   npm run dev
   ```
   o en producción:
   ```bash
   npm start
   ```
5. Abrir `http://localhost:3000` y verificar que se redirige a `/alumnos`.

6. Uso:
   - Nuevo Alumno: `/alumnos/create`
   - Editar: `/alumnos/:id/edit`
   - Eliminar lógico: boton borrar

