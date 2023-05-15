const nodemailer = require('nodemailer');
const sendMail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();
    let transporter = await nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
            user: "makenna.kuhic@ethereal.email", // generated ethereal user
            pass: "Dkgzb7RYacs8wSRX2S", // generated ethereal password
        },
    })
    let info = await transporter.sendMail({
        from: '"Biplab Roy" <biplabroy@gmail.com>', // sender address
        to: "akash@gmail.com", // list of receivers
        subject: "Hello Akash", // Subject line
        text: "How are you", // plain text body
        html: "<b>Hello Akash. How are you ?</b>",
    })
    res.json(info)
}

module.exports = sendMail;