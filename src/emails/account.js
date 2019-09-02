const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'danielwadell@yahoo.com',
        subject: 'Thank you for joining!',
        text: `Welcome to the app, ${name}. Let me know how you feel about the app!`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'danielwadell@yahoo.com',
        subject: 'Sorry to see you leave',
        text: `Goodbye, ${name}. Let us know how we can improve.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}