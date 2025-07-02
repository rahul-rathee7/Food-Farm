const express = require('express');
const app = express();
const dataRoute = require('./arrays.js');
const cors = require('cors');

// Use only one CORS middleware
app.use(cors({
    origin: 'http://172.17.5.53:3000' // Allow only React frontend
}));

app.use(express.json());

app.use('/data', dataRoute); // Route at /data

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
});