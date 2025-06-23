app.js – Main Entry
require('dotenv').config();
require('./config/db');
const express = require('express');

const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
