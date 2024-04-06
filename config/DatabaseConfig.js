require('dotenv').config();

class DatabaseConfig {

  constructor() {
    if (DatabaseConfig.instance) {
      return DatabaseConfig.instance;
    }

    this.dbType = process.env.DB_TYPE || 'mongodb'; 
    this.username = process.env.DB_USERNAME;
    this.password = process.env.DB_PASSWORD;
    this.url = process.env.DB_URL;
    this.dbport = process.env.DB_PORT;
    this.databaseName = process.env.DB_NAME;
    this.options = JSON.parse(process.env.DB_OPTIONS);

    DatabaseConfig.instance = this;
  }

  static getInstance() {
    if (!DatabaseConfig.instance) {
      DatabaseConfig.instance = new DatabaseConfig();
    }
    return DatabaseConfig.instance;
  }
}

module.exports = DatabaseConfig;
