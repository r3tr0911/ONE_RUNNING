const syncQueue = require('./syncQueue')

console.log('🔧 Worker iniciado...');


syncQueue.process(async (job) =>{
    const { deviceId } = job.data;
    console.log(`Revisando conexion del dispositivo ${deviceId}...`);

    const isConnected = Math.random() > 0.5;

    console.log(`Resultado: el dispositivo ${deviceId} está ${isConnected ? 'conectado' : 'desconectado'}.`);
});