const express = require('express');
const DatabaseProviderFactory = require('./config/DatabaseProviderFactory');
const DatabaseConfig = require('./config/DatabaseConfig'); 
const loggerConfig = require('./config/LoggerConfig');
const LoggerFactory = require('./utils/LoggerFactory');
const SMSRoutes = require('./route/SMSRoutes');
const EmailRoutes = require('./route/EmailRoutes');
const bodyParser = require('body-parser');
const EmailService = require('./services/EmailService/EmailService');
const AWSServiceProvider = require('./services/AWSServiceProvider');
const SMSService = require('./services/SmsService/SMSService');
const fileUpload = require('express-fileupload');
class App {
  constructor() {
    this.app = express();
    this.configureLogging();
    this.startServer();
    this.connectToDatabase();
    this.setupErrorHandling();
    this.initializeServices();
    this.configureMiddleware();
    this.setupRoutes();
  }

  startServer() {
    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  }

  initializeServices() {
    const awsServiceProvider = new AWSServiceProvider();
    this.smsService = new SMSService(awsServiceProvider);
    this.emailService = new EmailService(awsServiceProvider);
  }

  configureMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(fileUpload({
      useTempFiles : true, 
      tempFileDir : '/tmp/'
  }));
  }

  setupRoutes() {
    const smsRoutes = new SMSRoutes(this.smsService); 
    const emailRoutes = new EmailRoutes(this.emailService);

    this.app.use('/sms', smsRoutes.getRouter());
    this.app.use('/email', emailRoutes.getRouter());
  }

  connectToDatabase() {
    const databaseConfig = DatabaseConfig.getInstance();
    const databaseProvider = DatabaseProviderFactory.createProvider(databaseConfig);
    databaseProvider.connect();
  }

  configureLogging() {
    const loggerFactory = LoggerFactory.getInstance();
    loggerConfig.providers.forEach(provider => {
        const logger = loggerFactory.createLogger(provider);
        logger.info('--------Logging Enabled--------', provider);
    });
}


setupErrorHandling() {
  this.app.use((err, req, res, next) => {
      const logger = LoggerFactory.getLogger('console'); 
      logger.error(`Error occurred: ${err.message}`);
      res.status(500).json({ error: 'Internal Server Error' });
  });
}
}

const server = new App();
