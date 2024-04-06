
class EmailController {
  constructor(emailService) {
    this.emailService = emailService;
  }

  async sendEmail(req, res, next) {
    try {
      const { to, subject, message } = req.body;
      const attachment = req.files.attachment; 
      await this.emailService.sendEmail(to, subject, message, attachment);
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EmailController;
