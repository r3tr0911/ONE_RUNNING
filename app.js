//Configuracion inicial 
require('dotenv').config(); // cargamos entornos de variables .env para claves y cosas sensibles
const express = require('express'); 
const cors = require('cors');
const { sequelize } = require('./src/models')

const app = express(); //Incializamos la app 

app.use(cors());
app.use(express.json());

//Confirguracion rutas
app.use('/users', require('./src/routes/userRoutes'));
app.use('/devices', require('./src/routes/deviceRoutes'));
app.use('/workouts', require('./src/routes/workoutRoutes'));

const PORT  =process.env.PORT || 3000;

app.listen(PORT, async () =>{
    console.log(`servidor corriendo en puerto ${PORT}`);
    await sequelize.sync({alter: true})
})
