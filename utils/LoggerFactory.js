const MongoDBLogger = require("../loggers/MongoDBLogger");
const ConsoleLogger = require("../loggers/ConsoleLogger");

class LoggerFactory {
    static #instance = null;

    constructor() {
        if (LoggerFactory.#instance) {
            throw new Error("Singleton class. Cannot instantiate using new.");
        }
    }

    static getInstance() {
        if (!LoggerFactory.#instance) {
            LoggerFactory.#instance = new LoggerFactory();
        }
        return LoggerFactory.#instance;
    }

    createLogger(provider) {
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
