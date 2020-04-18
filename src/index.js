const express = require('express');
const bodyparser = require('body-parser');
const emailRoute = require('./routes/sendMail');

const app = express();

app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(emailRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("server started at port:",port);
})

// const invoiceIt = require('@rimiti/invoice-it').default;

// const invoice = invoiceIt.create();

// invoice.recipient.company_name = 'Receiver company';
// invoice.recipient.first_name = 'Will';
// invoice.recipient.last_name = 'Jameson';
// invoice.recipient.street_number = '20';
// invoice.recipient.street_name = 'Rue Victor Hugo';
// invoice.recipient.zip_code = '77340';
// invoice.recipient.city = 'Pontault-Combault';
// invoice.recipient.country = 'France';
// invoice.recipient.phone = '06 00 00 00 00';
// invoice.recipient.mail = 'will.jameson@test.com';
 
// invoice.emitter.name = 'Dim Solution';
// invoice.emitter.street_number = '15';
// invoice.emitter.street_name = 'Rue Jean Jaures';
// invoice.emitter.zip_code = '75012';
// invoice.emitter.city = 'Paris';
// invoice.emitter.country = 'France';
// invoice.emitter.phone = '01 00 00 00 00';
// invoice.emitter.mail = 'contact@dimsolution.com';
// invoice.emitter.website = 'www.dimsolution.com';

// invoice.getInvoice();


// invoice.getInvoice().toHTML();


// invoice.getInvoice().toHTML().toFile('./invoice.html')
//   .then(() => {
//       console.log('HTML file created.');
//   });

//   invoice.getInvoice().toPDF().toFile('./invoice.pdf')
//   .then(() => {
//       console.log('PDF file created.');
//   });

