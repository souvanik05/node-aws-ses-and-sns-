<h1 align="center">Node.js AWS SES/SNS SMS & Email Sender</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-v14.17-green" alt="Node.js Version">
  <img src="https://img.shields.io/badge/license-MIT-blue" alt="License">
</p>

<p align="center">
  This Node.js application utilizes AWS SES (Simple Email Service) and SNS (Simple Notification Service) to send both SMS and email messages. It also supports sending multiple attachments via email.
</p>

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Contributing](#contributing)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/node-aws-ses-sns-sms-email-sender.git
   Navigate to the project directory:
   ```

   cd project folder

   Install dependencies:
   npm install

## Configuration

2. Configuration
   Before using the application, you need to configure your AWS credentials and set up your environment variables. Follow these steps:
   AWS Credentials: Make sure you have AWS credentials configured either through environment variables, AWS CLI configuration, or IAM policy. You need to setup ses and sns also

   Environment Variables: Create a .env file in the root directory of the project and provide the following variables:

   AWS_ACCESS_KEY_ID=
   AWS_SECRET_ACCESS_KEY=
   AWS_REGION=
   Replace your-aws-region, your-access-key-id, your-secret-access-key with your actual AWS region, access key ID, secret access key respectively.

## Contributing

3. Contributing
   Contributions are welcome! If you'd like to add new features, improve existing ones, or fix issues, please follow these steps:

   Fork the repository.
   Create a new branch: git checkout -b feature/new-feature.
   Make your changes and commit them: git commit -am 'Add new feature'.
   Push to the branch: git push origin feature/new-feature.
   Submit a pull request.
