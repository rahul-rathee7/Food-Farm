const express = require('express');
const app = express();
const dataRoute = require('./arrays.js');
const cors = require('cors');


app.use(cors({
    origin: ['http://172.17.5.53:3000','http://localhost:3000'] 
}));

app.use(express.json());

app.use('/data', dataRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
});