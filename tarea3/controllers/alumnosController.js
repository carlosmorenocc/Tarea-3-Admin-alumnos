const Alumno = require('../models/Alumno');

exports.getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find({ isDeleted: false }).lean();
    res.render('alumnos/index', { alumnos });
  } catch (error) {
    res.status(500).send('Error al obtener alumnos');
  }
};

exports.showCreateForm = (req, res) => {
  res.render('alumnos/create');
};

exports.createAlumno = async (req, res) => {
  try {
    const nuevoAlumno = new Alumno(req.body);
    await nuevoAlumno.save();
    res.redirect('/alumnos');
  } catch (error) {
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
    await Alumno.findByIdAndUpdate(req.params.id, { isDeleted: true });
    res.redirect('/alumnos');
  } catch (error) {
    res.status(500).send('Error al eliminar alumno');
  }
};