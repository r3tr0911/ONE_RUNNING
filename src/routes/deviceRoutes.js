const express = require('express');
const router = express.Router();
const { createDevice, getDevices } = require('../controllers/deviceController');
const authMiddleware = require ('../middlewares/authMiddleware');

// Crear nuevo dispositivo 
router.post('/', authMiddleware, createDevice);

// Obtener todos los dispositivos del usuario autenticado
router.get('/', authMiddleware, getDevices);

module.exports = router;