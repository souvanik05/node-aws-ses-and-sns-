class ServiceProviderInterface {
    async sendSMS(phoneNumber, message) {}
    async sendEmail(to, subject, message, attachment) {}
  }
  
  module.exports = ServiceProviderInterface