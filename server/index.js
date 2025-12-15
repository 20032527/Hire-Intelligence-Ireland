const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const gadgetRoutes = require('./routes/gadgetRoutes');
const rentalRoutes = require('./routes/rentalRoutes');

const app = express();
const PORT = process.env.PORT || 10000;

/* Simple health check to see if API is running */
app.get("/", (req, res) => {
  res.send("API running");
});

/* Start the server on given port */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

/* Enable CORS so frontend can talk to backend */

app.use(cors({
  origin: '3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
}));

app.use(bodyParser.json());

app.use('/v1/auth', authRoutes);
app.use('/v1/gadgets', gadgetRoutes);
app.use('/v1/rentals', rentalRoutes);

/* Global error handler (fallback) */

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Server error' });
});

module.exports = app; 
