const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = "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"

sgMail.setApiKey(sendgridAPIKey)

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