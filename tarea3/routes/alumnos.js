const express = require('express');
const router = express.Router();
const alumnosController = require('../controllers/alumnosController');

router.get('/', alumnosController.getAlumnos);
router.get('/create', alumnosController.showCreateForm);
router.post('/', alumnosController.createAlumno);
router.get('/:id/edit', alumnosController.showEditForm);
router.put('/:id', alumnosController.updateAlumno);
router.delete('/:id', alumnosController.deleteAlumno);

module.exports = router;