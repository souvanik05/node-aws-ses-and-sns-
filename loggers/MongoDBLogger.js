
const LogModel = require('../models/Log');
const Logger = require('./Logger');

class MongoDBLogger extends Logger {
  async info(message,data) {
    await LogModel.create({ level: 'info', message,data });
  }

  async error(message,data) {
    await LogModel.create({ level: 'error', message , data });
  }

  async debug(message,data) {
    await LogModel.create({ level: 'debug', message,data });
  }
}

module.exports = MongoDBLogger;
