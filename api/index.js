// Simple Express server for QRGenerator backend
const express = require('express');
const sql = require('mssql');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Azure SQL config (replace with your credentials)
const sqlConfig = {
  user: process.env.AZURE_SQL_USER || 'your_user',
  password: process.env.AZURE_SQL_PASSWORD || 'your_password',
  database: process.env.AZURE_SQL_DB || 'your_db',
  server: process.env.AZURE_SQL_SERVER || 'your_server.database.windows.net',
  pool: { max: 5, min: 0, idleTimeoutMillis: 30000 },
  options: {
    encrypt: true, // for Azure
    trustServerCertificate: false
  }
};

// Example API route
app.get('/api/ping', (req, res) => {
  res.json({ message: 'pong' });
});

// Test Azure SQL connection
app.get('/api/test-sql', async (req, res) => {
  try {
    await sql.connect(sqlConfig);
    const result = await sql.query`SELECT TOP 1 name FROM sys.tables`;
    res.json({ success: true, tables: result.recordset });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`QRGenerator API listening on port ${PORT}`);
});
