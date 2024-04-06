const MongoDBLogger = require("../loggers/MongoDBLogger");
const ConsoleLogger = require("../loggers/ConsoleLogger");

class LoggerFactory {
    static createLogger(provider) {
      switch (provider) {
          case 'mongodb':
          return new MongoDBLogger(); 
        case 'console':
          return new ConsoleLogger();
        default:
          throw new Error(`Unsupported logger provider: ${provider}`);
      }
    }
  }
  
  module.exports = LoggerFactory;
  