const express = require('express');
const router = express.Router();
const EmailController = require('../Controller/EmailController');

class EmailRoutes {
  constructor(emailService) {
    this.router = router;
    this.emailController = new EmailController(emailService);
    this.initRoutes();
  }

  initRoutes() {
    this.router.post('/send',(req, res, next) => this.emailController.sendEmail(req, res, next));
  }

  getRouter() {
    return this.router;
  }
}

module.exports = EmailRoutes;