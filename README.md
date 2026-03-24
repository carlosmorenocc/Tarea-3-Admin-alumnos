# Tarea-3-Admin-alumnos

# Objetivo
Desarrollar una aplicación web tipo CRUD para la administración de alumnos, utilizando Node.js, Express, MongoDB y Express Handlebars, aplicando buenas prácticas de estructura, validación y manejo de vistas del lado del servidor.

# Descripción
En esta actividad deberás construir una aplicación web que permita registrar, consultar, editar y eliminar lógicamente alumnos.
La aplicación debe contar con una interfaz web renderizada con Express Handlebars y conectarse a una base de datos MongoDB para almacenar la información.

# Cada alumno deberá incluir los siguientes datos:

- Nombre
- Correo electrónico
- Número de expediente
- Semestre (selección del 1 al 10)

# La aplicación debe permitir al usuario realizar las operaciones básicas de un CRUD:

- Ver la lista de alumnos registrados
- Crear un nuevo alumno
- Editar un alumno existente
- Eliminar lógicamente un alumno
- Requerimientos funcionales

# Tu aplicación debe incluir, como mínimo, lo siguiente:

 

- Lista de alumnos
- Debes crear una vista principal que muestre una tabla o lista con los alumnos registrados.

# La tabla debe mostrar al menos:

Nombre
Correo
Número de expediente
Semestre
Acciones disponibles
Las acciones deben incluir:

Editar
Eliminar
 

Formulario de alta de alumno
Debes crear un formulario para registrar nuevos alumnos.


# Campos requeridos:

- Nombre
- Correo electrónico
- Número de expediente
- Semestre (select del 1 al 10)
 

# Formulario de edición
Debes crear un formulario para editar la información de un alumno existente.

Este formulario debe cargar la información actual del alumno y permitir modificarla.

 
# Eliminación lógica
La eliminación no debe borrar físicamente el registro de la base de datos.

En su lugar, debes implementar una eliminación lógica, por ejemplo:

agregando un campo como `isDeleted: true` o un campo equivalente que indique que el registro ya no está activo (status, por ejemplo)
Los alumnos eliminados lógicamente no deben mostrarse en la lista principal.

 

# Requerimientos técnicos
Debes utilizar las siguientes tecnologías:

- Node.js
- Express
- MongoDB
- Express Handlebars
 

# Recuerda ademas que:

- Debes estructurar tu proyecto de manera organizada
- Debes separar rutas, vistas, controladores y modelos cuando aplique
- Debes utilizar formularios HTML funcionales
- Debes manejar correctamente los métodos y rutas necesarias para crear, editar y eliminar
 

# Validaciones mínimas
Debes validar al menos lo siguiente:

- Todos los campos son obligatorios
- El correo debe tener un formato válido
- El semestre debe estar entre 1 y 8
- El número de expediente no debe quedar vacío
 

Puedes implementar validaciones del lado del servidor y, si lo deseas, complementar con validaciones del lado del cliente.

 

Interfaz y estilos
Puedes utilizar Bootstrap CSS si así lo deseas para dar estilo a la aplicación.

# Bootstrap puede ser usado para:

- diseño general
- tablas
- formularios
- botones
- alertas
- modales o diálogos
- Su uso es opcional, pero recomendable si deseas mejorar la presentación visual y la experiencia de usuario.

 

# Criterios de evaluación
La actividad será evaluada considerando los siguientes aspectos:

# Funcionalidad

- La aplicación permite listar alumnos
- La aplicación permite crear alumnos
- La aplicación permite editar alumnos
- La aplicación permite eliminar lógicamente alumnos
 

# Persistencia

La información se almacena correctamente en MongoDB
Los registros eliminados lógicamente no aparecen en la lista principal
 

# Estructura del proyecto

- Organización clara de archivos y carpetas
Uso adecuado de rutas, vistas y modelos
Validaciones

- Validación básica de datos
Manejo adecuado de errores o mensajes al usuario
Interfaz

- Presentación clara y ordenada
Uso correcto de formularios y tabla/listado
Uso opcional pero correcto de Bootstrap, en caso de implementarlo
 

# Entregables
Debes entregar:

El código fuente completo del proyecto
Archivo README.md con instrucciones para ejecutar la aplicación
Evidencia de funcionamiento (pueden ser capturas de pantalla o un pequeño video del flujo)
Enlace al repositorio correspondiente
Pull Request, en caso de que así se solicite en la dinámica del curso
Forma de entrega:

Crear una nueva rama en tu repositorio de tareas llamada "tarea3"
Crear una carpeta llamada "tarea3" en la nueva rama
Insertar los archivos de la tarea dentro de la carpeta tarea3 (un archivo por cada ejercicio)
Esta tarea se desarrolla en pair programming. Ambos deben subir su propio codigo a su propio repositorio. La entrega es individual.
 
