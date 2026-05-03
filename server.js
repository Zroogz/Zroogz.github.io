const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname)));
app.use(express.json());

// Load jokes and fortunes from JSON files
const jokes = JSON.parse(fs.readFileSync(path.join(__dirname, 'jokes.json'), 'utf8'));
const fortunes = JSON.parse(fs.readFileSync(path.join(__dirname, 'fortunes.json'), 'utf8'));

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to get a random joke
app.get('/api/joke', (req, res) => {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  res.json({ joke: randomJoke });
});

// API endpoint to get all jokes
app.get('/api/jokes', (req, res) => {
  res.json(jokes);
});

// API endpoint to get a random fortune
app.get('/api/fortune', (req, res) => {
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  res.json({ fortune: randomFortune });
});

// API endpoint to get all fortunes
app.get('/api/fortunes', (req, res) => {
  res.json(fortunes);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
