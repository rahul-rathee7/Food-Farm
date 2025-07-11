const express = require('express');
const router = express.Router();  
const arr = require('../data.json');

router.get('/', (req, res) => {
    res.json(arr);                  
});

module.exports = router;       
