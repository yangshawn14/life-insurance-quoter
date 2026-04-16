// import express
const express = require('express');
// create router
const router = express.Router();
// Will need access to carriers data
const carriers = require('../data/carriers.json');

// routes
// POST quote details
router.post('/', (req, res) => {
    // Get user input from req body
    // console.log(req.body);
    const quoteRequest = req.body;

    // Get age from quoteRequest.birthdate
    const birthdate = new Date(quoteRequest.birthdate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();


    // Generate a quote from each carrier
    const quotes = carriers.map((carrier) => {
        // create new carrier object for each carrier
        return {
            carrierId: carrier.carrierId,
            carrierName: carrier.carrierName,
            carrierLogo: carrier.carrierLogo,
            // Hard-coded premium for simplicity
            monthlyPremium: Math.floor(Math.random() * (100 - 25) + 25)
            // If I wanted the premium to calculate more realistically instead of randomly
            // monthlyPremium: Math.floor(
            //     (quoteRequest.coverageAmount / 1000) *
            //     (age / 50) *
            //     (quoteRequest.tobaccoUse ? 1.5 : 1)
            // )
        }
    });
    // send response to server
    res.status(200).json({ quotes }); // adding curly braces wraps this response with a 'quotes' key
});



// export routes
module.exports = router;