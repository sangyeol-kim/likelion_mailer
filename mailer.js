const nodemailer = require("nodemailer");

nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    service: "", // ex) 사용할 메일 서비스 (naver, gmail ...)
    auth: {
      user: "", // Email
      pass: "" // Password
    }
  });

  // 발송할 사용자 정보 관리
  let mails = [
    {
      name: "",
      email: ""
      // 개인 별 면접 시간 등 다양하게 추가
    },
    // {
    //   name: "",
    //   email: "",
    // },
  ];

  let sendBox = () => {
    for (const mail of mails) {
      let settings = {
        from: "", // Sender Email
        to: mail.email,
        subject: "", // Title
        text: `` // Content
        // text: 에는 Template literals를 사용했습니다. 아래 주석처럼 사용하시면 됩니다.
        // `안녕하세요. ${mail.name}님. 멋쟁이 사자처럼 7기 .........`

        // html: "<h1>HTML 예시</h1>"
      };

      transporter.sendMail(settings, (err, res) => {
        if (err) {
          return console.log(err);
        }
        console.log("Message sent: %s", res.messageId);
      });
    }
  };

  sendBox();
});
