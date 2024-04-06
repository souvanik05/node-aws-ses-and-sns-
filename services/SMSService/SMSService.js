class SMSService {
  constructor(serviceProvider) {
    this.serviceProvider = serviceProvider;
  }

  async sendSMS(phoneNumber, message) {
    await this.serviceProvider.sendSMS(phoneNumber, message);
  }
}

module.exports = SMSService;