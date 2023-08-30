const express = require('express');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index.js');
const app = express();
const nodemailer = require('nodemailer');
const cors = require('cors');
const port = process.env.PORT || 3000;
const axios = require('axios');
const hbs = require('nodemailer-express-handlebars');
const path = require('path');

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

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

    const handlebarOptions = {
      viewEngine: {
        extName: '.handlebars',
        partialsDir: path.resolve('./views'),
        defaultLayout: false,
      },
      viewPath: path.resolve('./views'),
      extName: '.handlebars',
    };

    transporter.use('compile', hbs(handlebarOptions));

    const mailOptions = {
      from: '"Lubesurgeons" <test@lubesurgeons.com>',
      to: email,
      subject: 'Hello ✔',
      template: 'email',
      context: {
        title: 'Title Here',
        text: 'Lorem ipsum dolor sit amet, consectetur...',
      },
    };
    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log('Message sent: %s', info.messageId);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);

    res
      .status(500)
      .json({ error: 'An error occurred while sending the email' });
  }
});

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

    const mailOptions = {
      from: '"Lubesurgeons" <test@lubesurgeons.com>',
      to: email,
      subject: 'Appointment Details',
      text: `Hey ${name}!`,
      html: `<b>Hey ${name}!</b>`,
    };

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
