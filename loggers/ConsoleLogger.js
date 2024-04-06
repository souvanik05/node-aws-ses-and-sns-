const Logger = require('./Logger');
class ConsoleLogger extends Logger{
    info(message,data) {
      console.log(`[INFO] ${message}`,data);
    }
  
    error(message,data) {
      console.error(`[ERROR] ${message}`,data);
    }
  
    debug(message,data) {
      console.debug(`[DEBUG] ${message}`,data);
    }
  }
  
  module.exports = ConsoleLogger;
  