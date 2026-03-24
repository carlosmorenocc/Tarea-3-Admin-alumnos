require('dotenv').config();

const express = require('express');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/alumnosDB', {
  serverSelectionTimeoutMS: 5000
})
  .then(() => {
    console.log('Conexión exitosa a MongoDB');
  })
  .catch((error) => {
    console.log('Error al conectar a MongoDB:', error.message);
  });

// Handlebars
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'main',
  helpers: {
    eq: (a, b) => a === b
  }
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// Ruta de prueba
app.get('/', (req, res) => {
  res.redirect('/alumnos');
});

// Rutas
app.use('/alumnos', require('./routes/alumnos'));

// Levantar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
