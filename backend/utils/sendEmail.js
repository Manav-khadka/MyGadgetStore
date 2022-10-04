const nodeMailer = require("nodemailer")
const { google } = require('googleapis')
// const controller= require('/backend/controllers/userController')


const CLIENT_ID = '917976331694-3eqad31cos2f1fhn9jds61bikrjcnn86.apps.googleusercontent.com'
const CLIENT_SECRET = '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'
const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
const REFRESH_TOKEN = '1//04g01Sc50alYiCgYIARAAGAQSNwF-L9IrVwv2NF6U1ydnZRHussvHoLbVyWhxfhDULT9WI-OIntt1StJkmV4m9kPj28OBAbhrz3g'
const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })



const sendEmail = async (options) => {
    const accessToken = await oAuth2Client.getAccessToken();
    const transporter = nodeMailer.createTransport({
        // host: process.env.SMPT_HOST,
        // port: process.env.SMPT_PORT,
        service:process.env.SMTP_SERVICE,
        auth: {
            type: process.env.TYPE,
            user: process.env.SMTP_MAIL,
            clientId: CLIENT_ID,
            clientSecret: CLIENT_SECRET,
            refreshToken: REFRESH_TOKEN,
            // pass: process.env.SMPT_PASSWORD,
            accessToken: accessToken

        },
    });

    const mailOptions = {
        from: process.env.SMTP_MAIL,
        to: options.email,
        subject: options.subject,
        text: options.message,
    };

    const result = await transporter.sendMail(mailOptions);
    return result;
};

// sendEmail()
//     .then((result) => console.log("fjsdl"))
//     .catch((error) => console.log("fd"));
module.exports=sendEmail;