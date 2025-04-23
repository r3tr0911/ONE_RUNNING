const { Device } = require('../models');
const syncQueue = require('../jobs/syncQueue')

const createDevice = async (req, res) => {
    const { name, type, status } = req.body;
    try{
    // Verificamos si el usuario autenticado está presente en el token
    const userId = req.user.id;

    const newDevice = await Device.create({
        name,
        type,
        status,
        connectedAt: new Date(),
        UserId: userId, // Asociación con el usuario
    });

    console.log('✅ Dispositivo creado. Enviando a la cola...');
    await syncQueue.add({ deviceId: newDevice.id});
    console.log('📤 Job enviado correctamente a la cola.');

    res.status(201).json({
        message: "Dispositivo creado exitosamente",
        device: newDevice,
    });
    }  catch (error){
        console.error(error);
        res.status(500).json({error: 'Error al crear el dispositivo' });
    }  
};

const getDevices = async (req, res) => {
    try {
        const userId = req.user.id;

        const devices = await Device.findAll({
            where: {UserId: userId },
        });

        res.status(200).json(devices);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener dispositivos' });
    }
};

module.exports = {
    createDevice,
    getDevices
}