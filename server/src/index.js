const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/auth/authRoutes');
const phoneRoutes = require('./routes/phone/phoneRoutes');

const app = express();

require('dotenv').config();

// Connect to MongoDB
connectDB();

app.use(cors({
  origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  allowedHeaders: ['Content-Type', 'Authorization'] 
}));

app.options('*', cors()); 
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/phoneList', phoneRoutes);  

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
