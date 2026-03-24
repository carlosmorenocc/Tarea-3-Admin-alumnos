# Tarea 2 - CV en linea con Express

Proyecto Node.js + Express con tres rutas requeridas:

- `GET /` pagina principal tipo CV
- `GET /contacto` formulario de contacto
- `POST /contacto` recepcion y envio de formulario usando FormSubmit

## Ejecutar proyecto

```bash
cd tarea2
npm install
npm start
```

Abrir en navegador:

- `http://localhost:3000/`
- `http://localhost:3000/contacto`

## Configuracion opcional

Por defecto se envia el formulario a `carlos.moreno@iteso.mx`.

Si quieres cambiar correo destino, define variable de entorno:

```bash
FORM_RECIPIENT=tu_correo@dominio.com npm start
```

## Estructura

```text
tarea2/
  src/
    app.js
    server.js
    routes/
      index.js
    views/
      index.html
      contacto.html
      enviado.html
    public/
      styles.css
```
