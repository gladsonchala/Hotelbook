const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hotelsRouter = require('./routes/hotels');
const csasRouter = require('./routes/csas');
const authRouter = require('./routes/auth');
const adminRouter = require('./routes/admin');


// Middleware
app.use(bodyParser.json());

// Routes
app.use('/hotels', hotelsRouter);
app.use('/csas', csasRouter);
app.use('/auth', authRouter);
app.use('/admin', adminRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Server Error');
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
