// import express and carriers data
const express = require('express');
const carriers = require('../data/carriers.json');

// create router
const router = express.Router();

// routes
// GET /carriers returns list of available carriers
router.get('/', (req, res) => {
    res.status(200).json(carriers);
});

// export
module.exports = router;