const Alumno = require('../models/Alumno');

exports.getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find({ isDeleted: false }).lean();
    console.log('Encontrados', alumnos.length, 'alumnos');
    res.render('alumnos/index', { alumnos });
  } catch (error) {
    console.error('Error al obtener alumnos:', error.message);
    res.status(500).send('Error al obtener alumnos');
  }
};

exports.showCreateForm = (req, res) => {
  res.render('alumnos/create');
};

exports.createAlumno = async (req, res) => {
  try {
    console.log('Creando alumno con datos:', req.body);
    const nuevoAlumno = new Alumno(req.body);
    await nuevoAlumno.save();
    console.log('Alumno creado con ID:', nuevoAlumno._id);
    res.redirect('/alumnos');
  } catch (error) {
    console.error('Error al crear alumno:', error.message);
    res.render('alumnos/create', { errores: ['Error al crear alumno'] });
  }
};

exports.showEditForm = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id).lean();
    if (!alumno || alumno.isDeleted) {
      return res.status(404).send('Alumno no encontrado');
    }
    res.render('alumnos/edit', { alumno });
  } catch (error) {
    res.status(500).send('Error al obtener alumno');
  }
};

exports.updateAlumno = async (req, res) => {
  try {
    await Alumno.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/alumnos');
  } catch (error) {
    res.render('alumnos/edit', { errores: ['Error al actualizar alumno'], alumno: req.body });
  }
};

exports.deleteAlumno = async (req, res) => {
  try {
    console.log('Eliminando alumno ID:', req.params.id);
    await Alumno.findByIdAndUpdate(req.params.id, { isDeleted: true });
    console.log('Alumno marcado como eliminado');
    res.redirect('/alumnos');
  } catch (error) {
    console.error('Error al eliminar alumno:', error.message);
    res.status(500).send('Error al eliminar alumno');
  }
};