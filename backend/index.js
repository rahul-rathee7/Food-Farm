let express = require('express');
let app = express();

let cors = require('cors');
app.use(cors());
let PORT = 5000;

app.get('/users', (req, res) => {
    
})

app.listen(PORT, () => {
    console.log("server is running on " + PORT);
})