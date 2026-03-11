const express = require('express');
const path = require('path');

const router = express.Router();

const viewsPath = path.join(__dirname, '..', 'views');

router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

router.get('/contacto', (req, res) => {
  res.sendFile(path.join(viewsPath, 'contacto.html'));
});

router.post('/contacto', async (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).send('Faltan campos obligatorios. Regresa al formulario e intenta de nuevo.');
  }

  const recipient = process.env.FORM_RECIPIENT || 'carlos.moreno@iteso.mx';

  const payload = new URLSearchParams({
    name: nombre,
    email: correo,
    message: mensaje,
    _subject: `Nuevo mensaje de contacto de ${nombre}`,
    _captcha: 'false',
    _template: 'table'
  });

  try {
    const response = await fetch(`https://formsubmit.co/${recipient}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      },
      body: payload.toString()
    });

    if (!response.ok) {
      return res.status(502).send('No se pudo enviar el mensaje al servicio externo. Intenta de nuevo.');
    }

    return res.sendFile(path.join(viewsPath, 'enviado.html'));
  } catch (error) {
    return res.status(500).send('Error de conexion con el servicio de formularios.');
  }
});

module.exports = router;
