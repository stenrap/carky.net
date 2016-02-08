var nodemailer    = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport'),
    appConfig     = require('config').get('config.email');
    transport     = null;

function EmailService() {
    
    transport = nodemailer.createTransport(smtpTransport({
        host: 'mail.carky.net',
        // TODO .... Get an SSL certificate so you can send secure emails.
        port: 26,
        secure: false,
        tls: {
            rejectUnauthorized: false
        },
        // TODO .... Get an SSL certificate so you can send secure emails.
        auth: {
            user: appConfig.get('noreply.user'),
            pass: appConfig.get('noreply.password')
        }
    }));
    
}

EmailService.prototype = {
    
    sendCode: function(email, code) {
        var mailOptions = {
            from: 'Carky <no-reply@carky.net>',
            to: email,
            subject: 'Carky Code',
            text: 'Hello!\n\n' +
            'If you requested a Carky account for this email address, please confirm it by clicking this link:\n\n' +
            '    https://www.carky.net/user/verify/'+code + '\n\n' +
            'Otherwise, just delete this email.\n\n' +
            'The absoulte warmest of regards,\n' +
            'Carky'
        };
        transport.sendMail(mailOptions, function(err, info) {
            if (err) {
                console.log('Error sending email:', err);
            }
        });
    }
    
};

module.exports = new EmailService();
