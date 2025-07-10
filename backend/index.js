const express = require('express');
const app = express();
const dataRoute = require('./arrays.js');
const cors = require('cors');


app.use(cors({
<<<<<<< HEAD
    origin: ['http://172.17.5.53:3000','http://localhost:3000', 'http://10.100.0.43:3000'] // Allow only React frontend
=======
    origin: ['http://172.17.5.53:3000','http://localhost:3000'] 
>>>>>>> dev
}));

app.use(express.json());

app.use('/data', dataRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server running on http://localhost:' + PORT);
});