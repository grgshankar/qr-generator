const fs = require("fs");
const handlebars = require("handlebars");
const nodemailer = require("nodemailer");

// creating transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "shankargurung027@gmail.com",
    pass: "rwvhvzxtvglptrxo",
  },
});

// verifying the connection
transporter.verify((err, success) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take our message");
  }
});

// waiting for the mail by using asyn fn
const sendEmail = async (payload) => {
  const { to, qrCode } = payload;
  // console.log({ to, qrCode });
  const htmlFile = await fs.readFileSync(
    __dirname + "/../email_templates/qrCode.html"
  ); //this will generate Buffer
  // console.log({ htmlFile });

  const htmlData = Buffer.from(htmlFile).toString(); // converting the buffer binary data into readable html format
  // console.log({ htmlData });
  const templates = handlebars.compile(htmlData); // to convert into js code
  // console.log({ templates });
  const data = templates({ qrCode: "cid:unique@nodemailer.com" }); //dynamic HTML
  // console.log({ data });

  const messageOptions = {
    from: "shankargurung027@gmail.com",
    to: to.toString(),
    subject: "QR Code from QR Generator",
    html: data, // html body
    attachments: [
      {
        filename: "image.png",
        path: qrCode,
        cid: "unique@nodemailer.com",
      },
    ],
  };
  const info = await transporter.sendMail(messageOptions);
  // console.log({ info });
  return info.messageId;
};

module.exports = { sendEmail };
