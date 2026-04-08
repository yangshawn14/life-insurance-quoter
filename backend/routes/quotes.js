// import express
const express = require('express');
// create router
const router = express.Router;
// Will need access to carriers
const carriers = require('./carriers');

// routes
// GET quote details
router.get('/', (req, res) => {
    res.json();
});



// export routes
module.exports = router;