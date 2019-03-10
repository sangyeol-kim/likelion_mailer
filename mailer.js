const nodemailer = require("nodemailer");

nodemailer.createTestAccount((err, account) => {
  let transporter = nodemailer.createTransport({
    /* host: "smtp.ethereal.email", // 본인이 사용하는 SMTP 메일서버가 있다면 사용할 수 있습니다.
    port: 587,
    secure: false, // true for 465, false for other ports
    */
    
    service: "", // service를 사용하면 SMTP 서버가 없어도 메일을 발송할 수 있습니다. 
                 // ex) 사용할 메일 서비스 (naver, gmail ...)
    auth: {
      user: "", // ID / likelion.org를 사용할 경우 service에 gmail을 체크하고 user에는 Email을 적어주세요.
      pass: "" // Password
    }
  });

  // 발송할 사용자 정보 관리
  let mails = [
    {
      name: "",
      email: ""
      // 개인 별 면접 시간 등 다양한 Property 추가 가능.
    },
    // {
    //   name: "",
    //   email: "",
    // },
  ];

  let sendBox = () => {
    for (const mail of mails) {
      let settings = {
        from: "", // Sender Email, Gmail은 위조 불가
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
        console.log("Message sent: %s", res.accepted);
        // 정상적으로 발송된 client eamil 출력
      });
    }
  };

  sendBox();
});
