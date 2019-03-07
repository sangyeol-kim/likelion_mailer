const nodemailer = require("nodemailer");

nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    service: "", // ex) 보내는 메일 계정의 서비스 (naver, gmail ...)
    auth: {
      user: "", // Email
      pass: "" // Password
    }
  });

  let mailList = [
    // 'abc@gmail.com', 'def@naver.com', ...
  ];

  let mailSettings = {
    from: "", // Sender Email
    to: mailList,
    subject: "", // Subject
    text: "" // Content
  };

  transporter.sendMail(mailSettings, (err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: %s", res.messageId);
  });
});
