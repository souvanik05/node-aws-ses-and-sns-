const ServiceProviderInterface = require('./ServiceProviderInterface');
const AWS = require('aws-sdk');
const awsConfig = require('../config/awsConfig');
const AwsHelper = require('../utils/AwsHelper');
const path = require('path'); 
const fs = require('fs'); 

class AWSServiceProvider extends ServiceProviderInterface {
  constructor() {
    super();
    this.sesClient = new AWS.SES(awsConfig);
    this.snsClient = new AWS.SNS(awsConfig);
  }

  async sendSMS(phoneNumber, message) {
    try {
        const params = {
          Message: message,
          PhoneNumber: phoneNumber
        };
        const response = await this.snsClient.publish(params).promise();
        console.log(`SMS sent successfully to ${phoneNumber}`);
        return response;
      } catch (error) {
        console.error('Error sending SMS:', error);
        throw error;
      }
  }

  async sendEmail(to, subject, message, attachments) {
    try {
      const templatePath = path.join(__dirname, '..', 'views', 'emailTemplate.html');
      const htmlBody = fs.readFileSync(templatePath, 'utf8');
      const formattedHtmlBody = htmlBody.replace('{{subject}}', subject).replace('{{message}}', message);
      const rawEmail = [
        `To: ${to}`,
        `From: 'souvascloud@gmail.com`,
        `Subject: ${subject}`,
        `MIME-Version: 1.0`,
        `Content-Type: multipart/mixed; boundary="NextPart"`,
        ``,
        `--NextPart`,
        `Content-Type: text/html`,
        ``,
        `${formattedHtmlBody}`,
        ``,
      ];
      if (attachments && attachments.length > 0) {
        for (const attachment of attachments) {
          const attachmentData = fs.readFileSync(attachment.tempFilePath);
          const base64Attachment = attachmentData.toString('base64');
          rawEmail.push(`--NextPart`);
          rawEmail.push(`Content-Type: ${attachment.mimetype}`);
          rawEmail.push(`Content-Disposition: attachment; filename="${attachment.name}"`);
          rawEmail.push(`Content-Transfer-Encoding: base64`);
          rawEmail.push(``);
          rawEmail.push(base64Attachment);
          rawEmail.push(``);
        }
      }
      rawEmail.push(`--NextPart--`);
      const rawEmailString = rawEmail.join('\n');
      const params = {
        RawMessage: {
          Data: rawEmailString
        }
      };

      const response = await this.sesClient.sendRawEmail(params).promise();
      console.log(`Email sent successfully to ${to}`);
      return response;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

 
  
}

module.exports = AWSServiceProvider;
