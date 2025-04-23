const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const authMiddleware = require ('../middlewares/authMiddleware');

//registro de usuario 
router.post('/register', registerUser);

//login de usuario
router.post('/login', loginUser);

//Proteger ruta
router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: 'bienvenido, este es el perfil protegido',
        user: req.user
    });
});



module.exports = router;