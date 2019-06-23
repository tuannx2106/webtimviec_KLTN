import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'webtimviecklcn@gmail.com',
    pass: 'Web123456'
  }
});

const mailOptions = {
  from: 'webtimviecklcn@gmail.com',
  to: 'supernija21@gmail.com',
  subject: 'Sending Email using asdasdasdNode.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

export const sendEmailTo = (to, subject, text) => {
  transporter.sendMail({
    from: 'webtimviecklcn@gmail.com',
    to,
    subject,
    text
  }, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}