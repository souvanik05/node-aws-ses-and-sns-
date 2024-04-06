class EmailService {
  constructor(serviceProvider) {
    this.serviceProvider = serviceProvider;
  }

  async sendEmail(to, subject, message, attachment) {
    await this.serviceProvider.sendEmail(to, subject, message, attachment);
  }
}

module.exports = EmailService;