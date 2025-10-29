// server.js
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// DB connection (optional, skip if MySQL not ready)
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || ''
});

db.connect(err => {
  if (err) {
    console.log('❌ Database not connected:', err.message);
  } else {
    console.log('✅ Database connected successfully');
  }
});

app.get('/', (req, res) => {
  res.send('🧪 Updated from GitHub! Staging Auto-Deploy Working 🚀');
});

app.listen(PORT, () => {
  console.log(`✅ Server started on port ${PORT}`);
});
