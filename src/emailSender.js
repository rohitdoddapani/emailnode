class EmailSender {

    constructor() {
        const nodemailer = require('nodemailer');
        this.invoiceIt = require('@rimiti/invoice-it').default;
        this.invoice = invoiceIt.create();
        this.path = require('path');
        this.fs = require('fs').promises;

        admin.initializeApp();

        let testAccount =  nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        this.transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass // generated ethereal password
            }
        });
    }

    // async sendEmail(mailOptions,callback) {
    //     try{
    //         const result = this.transporter.sendMail(mailOptions);
    //         callback(false,result);
    //     } catch(error) {
    //         callback(true,error);
    //     }
    // }

    async createInvoice() {
        
        
        invoice.recipient.company_name = 'Receiver company';
        invoice.recipient.first_name = 'Will';
        invoice.recipient.last_name = 'Jameson';
        invoice.recipient.street_number = '20';
        invoice.recipient.street_name = 'Rue Victor Hugo';
        invoice.recipient.zip_code = '77340';
        invoice.recipient.city = 'Pontault-Combault';
        invoice.recipient.country = 'France';
        invoice.recipient.phone = '06 00 00 00 00';
        invoice.recipient.mail = 'will.jameson@test.com';
        
        invoice.emitter.name = 'Dim Solution';
        invoice.emitter.street_number = '15';
        invoice.emitter.street_name = 'Rue Jean Jaures';
        invoice.emitter.zip_code = '75012';
        invoice.emitter.city = 'Paris';
        invoice.emitter.country = 'France';
        invoice.emitter.phone = '01 00 00 00 00';
        invoice.emitter.mail = 'contact@dimsolution.com';
        invoice.emitter.website = 'www.dimsolution.com';

        await invoice.getInvoice();

        await invoice.getInvoice().toHTML();

        await invoice.getInvoice().toHTML().toFile('./invoice.html')
        .then(() => {
            console.log('HTML file created.');
        });

        await invoice.getInvoice().toPDF().toFile('./invoice.pdf')
        .then(() => {
            console.log('PDF file created.');
        });
    }

    async sendEmailTest(){
        await transporter.sendMail({
            from: '"Devrushi" <no-replay@devrushi.com>', // sender address
            to: "doddapanirohit123@gmail.com", // list of receivers
            subject: "Invoice generated", // Subject line
            text: "Sending Some attachments", // plain text body
            attachments: [
                { filename: 'invoice.pdf', path: './invoice.pdf'}
            ]
        });
    }
}

module.exports = EmailSender;