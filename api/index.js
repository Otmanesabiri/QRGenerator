// Simple Express server for QRGenerator backend
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Example API route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// TODO: Add routes to connect to your database here

app.listen(PORT, () => {
  console.log(`QRGenerator API listening on port ${PORT}`);
});
