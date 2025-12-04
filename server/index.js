const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const gadgetRoutes = require('./routes/gadgetRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/v1/auth', authRoutes);
app.use('/v1/gadgets', gadgetRoutes);
app.use('/v1/rentals', rentalRoutes);


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

module.exports = app; 
