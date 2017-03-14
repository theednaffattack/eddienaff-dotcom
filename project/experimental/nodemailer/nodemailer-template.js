/*
Simple nodemailer example
-------------------------
Date: Mon, Mar, 13, 2017, 5:57pm
From: https://nodemailer.com/about/
Description: First example for use on my personal website contact
*/

'use strict';
const nodemailer = require('nodemailer');

// create reusable transporter object using the defatul SMTP transport
let transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'gmail.user@gmail.com',
		pass: '********'
	}
});

// setup email data with unicode symbols
let mailOptions = {
	from: '"Fred Foo <foo@blurdybloop.com>', // sender address
	to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers
	subject: 'Hello', // Subject line
	text: 'Hello world ?', // plain text body
	html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
	if(error) {
		return console.log(error);
	}
	console.log('Mesage %s sent: %s', info.messageId, info.response);
});