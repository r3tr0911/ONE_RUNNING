// importamos la libreria y jwt y hacemos destructuring de User
const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const { User } = require('../models');


const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUSer = await User.findOne({ where: {email}});
        if (existingUSer) {
            return res.status(400).json({ error: "Usuario existente" });
        }
        const hashedPassword = await bcrypt.hash(password, 10 );

        const newUser = await User.create({name, email, password: hashedPassword });        
        res.status(201).json({message: "Usuario crado con exito!", userId: newUser.id });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: "Error en el servidor"})
    }
};

const loginUser = async(req, res) => {
    const { email, password} = req.body

    try {
        const user = await User.findOne({ where: {email} });
        if(!user) {
            return res.status(401).json({error: 'Contraseña o email invalido'})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({error: 'Contraseña o email invalido'})
        }

        const token = jwt.sign({ id: user.id, email: user.email},process.env.JWT_SECRET, {
            expiresIn: '12h'
        })
        res.json({message: 'ingreso completado', token });
    } catch (error) {
        console.error(error);
        res.status(500).json({error: 'Error en el servidor'});
    }
};

module.exports = {
    registerUser,
    loginUser
}