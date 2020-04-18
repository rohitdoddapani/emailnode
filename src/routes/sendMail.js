const express = require('express');
const router = express.Router();
const EmailSender = require('../emailSender');

router.get('/sendEmail',async (req,res) => {
    try {
        const emailSender = new EmailSender();
        await emailSender.createInvoice((iserr,response) => {
            console.log('Error createinvoice',iserr);
            console.log('Response',response);
        });
        await emailSender.sendEmailTest((iserr,response) => {
            console.log('isError mail',iserr);
            console.log('Response',response);
        });

        res.status(200).send({
            error: false,
            message: 'Email Sent Success'
        });
    }catch(err){
        res.status(400).send({
            error: true,
            message: err
        });
    }
});

module.exports = router;