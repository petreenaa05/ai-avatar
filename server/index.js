require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;

// ...existing code...

app.get('/api/get-api-key', (req, res) => {
  const apiKey = process.env.API_KEY; // Ensure you have the API key stored in environment variables
  res.json({ apiKey });
});

// ...existing code...

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});