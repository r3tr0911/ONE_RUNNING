const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts } = require('../controllers/workoutController');
const authMiddleware = require ('../middlewares/authMiddleware');

// Crear nuevo dispositivo 
router.post('/', authMiddleware, createWorkout);

// Obtener todos los dispositivos del usuario autenticado
router.get('/', authMiddleware, getWorkouts);

module.exports = router;