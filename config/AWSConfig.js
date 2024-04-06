// config/awsConfig.js

const AWS = require('aws-sdk');
require('dotenv').config(); 

class AWSConfig {
  constructor() {
    if (!AWSConfig.instance) {
      this.accessKeyId = process.env.AWS_ACCESS_KEY_ID;
      this.secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
      this.region = process.env.AWS_REGION;

      AWS.config.update({
        accessKeyId: this.accessKeyId,
        secretAccessKey: this.secretAccessKey,
        region: this.region
      });

      AWSConfig.instance = this;
    }

    return AWSConfig.instance;
  }

  static getInstance() {
    if (!AWSConfig.instance) {
      AWSConfig.instance = new AWSConfig();
    }
    return AWSConfig.instance;
  }
}

module.exports = AWSConfig;
