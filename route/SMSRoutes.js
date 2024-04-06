// routes/SMSRoutes.js

const express = require('express');
const router = express.Router();
const SMSController = require('../Controller/SMSController');

class SMSRoutes {
  constructor(smsService) {
    this.router = router;
    this.smsController = new SMSController(smsService); 
    this.initRoutes();
  }

  initRoutes() {
    this.router.post('/send', (req, res, next) => this.smsController.sendSMS(req, res, next));
  }
  

  getRouter() {
    return this.router;
  }
}

module.exports = SMSRoutes;
