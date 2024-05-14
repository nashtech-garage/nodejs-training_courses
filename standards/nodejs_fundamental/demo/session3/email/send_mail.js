const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Test gui mail tu Node.js',
    text: 'Nhan duoc chua ne'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`Email sent: ${info.response}`);
    }
});