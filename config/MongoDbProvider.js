const mongoose = require('mongoose');

class MongoDBProvider {
  constructor(databaseConfig) {
    this.databaseConfig = databaseConfig;
  }

  connect() {
    const url = `mongodb://${this.databaseConfig.username}:${this.databaseConfig.password}@${this.databaseConfig.url}:${this.databaseConfig.dbport}/${this.databaseConfig.databaseName}`;

    mongoose.connect(url, this.databaseConfig.options);
    const db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB", url);
    
    });
  }
}

module.exports = MongoDBProvider;