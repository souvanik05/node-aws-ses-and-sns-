
const MongoDBProvider = require('./MongoDbProvider');


class DatabaseProviderFactory {
  static createProvider(dbconfig) {
    switch (dbconfig.dbType) {
      case 'mongodb':
        return new MongoDBProvider(dbconfig);
      default:
        throw new Error(`Unsupported database type: ${dbType}`);
    }
  }
}

module.exports = DatabaseProviderFactory;