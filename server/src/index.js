
const express = require('express');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth/authRoutes');
const phoneRoutes = require('./routes/phone/phoneRoutes');

const app = express();

require('dotenv').config();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/phoneList', phoneRoutes);  

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});