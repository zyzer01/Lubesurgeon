const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index.js');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const port = process.env.PORT || 3000;
const axios = require('axios');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

const corsOptions = {
  origin: ['http://localhost:5173'],
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));

// Serve static files from the "public" directory
app.use(express.static('public'));

// Routes
app.use('/', indexRouter);

// Define your route for handling the POST request
app.post('/send-email', async (req, res) => {
  try {
    // Extract form input data (name and email) from the request body
    const { name, email } = req.body;

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: 'mail.lubesurgeons.com',
      port: 465,
      secure: true,
      auth: {
        user: 'test@lubesurgeons.com',
        pass: '?kH1v7)%c)Rh',
      },
    });

    // Compose the email content
    const mailOptions = {
      from: '"Lubesurgeons" <test@lubesurgeons.com>',
      to: email, // Use the provided email from the form input
      subject: 'Hello ✔',
      text: `Hey ${name}!`, // Customize the text of the email
      html: `<b>Hey ${name}!</b>`, // Customize the HTML content of the email
    };
    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    // Respond to the client indicating success
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Respond with an error status and message
    res
      .status(500)
      .json({ error: 'An error occurred while sending the email' });
  }
});

// Define your route for handling the POST request
app.post('/send-booking', async (req, res) => {
  try {
    const { name, email } = req.body;

    const transporter = nodemailer.createTransport({
      host: 'mail.lubesurgeons.com',
      port: 465,
      secure: true,
      auth: {
        user: 'test@lubesurgeons.com',
        pass: '?kH1v7)%c)Rh',
      },
    });

    // Compose the email content
    const mailOptions = {
      from: '"Lubesurgeons" <test@lubesurgeons.com>',
      to: email,
      subject: 'Hello ✔',
      text: `Hey ${name}!`,
      html: `<b>Hey ${name}!</b>`,
    };
    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    // Respond to the client indicating success
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    // Respond with an error status and message
    res
      .status(500)
      .json({ error: 'An error occurred while sending the email' });
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
