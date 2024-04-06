class SMSController {
  constructor(smsService) {
    this.smsService = smsService; 
  }
  async sendSMS(req, res, next) {
    try {
      const { phoneNumber, message } = req.body;
      await this.smsService.sendSMS(phoneNumber, message);
      res.status(200).json({ success: true, message: 'SMS sent successfully' });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = SMSController;
