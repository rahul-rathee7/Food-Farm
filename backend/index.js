const express = require('express');
const app = express();
const dataRoute = require('./middleware/arrays.js');
const cors = require('cors');

// Use only one CORS middleware
app.use(cors({
    origin: ['http://172.17.5.53:3000','http://localhost:3000', 'http://10.100.0.43:3000'] 
}));

app.use(express.json());

app.use('/data', dataRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
});