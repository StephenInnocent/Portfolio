const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// const mailAddress = process.env.mailAddress;
// const mailPassword = process.env.password;
const mailAddress = "mandonginnocent88@gmail.com";
const mailPassword = "Mandongcodes001"
// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service provider
    auth: {
        user: mailAddress, // Replace with your email
        pass: mailPassword // Replace with your email password or app password
    }
});


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Send the homepage HTML file
});

// Handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body;
    
    const mailOptions = {
        from: email,
        to: mailAddress, // Replace with your email
        subject: `New Contact Form Submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully!');
    });
    console.log("form submitted");

});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});