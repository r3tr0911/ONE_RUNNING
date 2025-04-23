const { Workout } = require ('../models')

// crear un nuevo entrenamiento 
const  createWorkout = async (req, res) => {
    const { type, duration, calories, DeviceId } = req.body;
    try {
        const userId = req.user.id;

        const newWorkout = await Workout.create({
            type,
            duration,
            calories,
            syncedAt: new Date(),
            DeviceId,
            UserId: userId,
        });

        res.status(201).json({ message: 'Entrenamiento creado con exito',
            workout: newWorkout,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear el entrenamiento' });
    }
};

// Obtener todos los entrenamientos del usuario
const getWorkouts = async (req, res) => {
    try {
        const userId = req.user.id;

        const workouts = await Workout.findAll({
            where: {UserId: userId},
        });

        res.status(200).json(workouts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener entrenamientos' });
    }
};

module.exports = {
    createWorkout,
    getWorkouts,
}