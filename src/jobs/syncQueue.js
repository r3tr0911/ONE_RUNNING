const Queue = require('bull');
const syncQueue = new Queue('syncQueue', process.env.REDIS_URL);

module.exports = syncQueue;