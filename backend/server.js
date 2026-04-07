// import express
const express = require('express');
// const quoteRoutes = require('./routes/quotes');
const carrierRoutes = require('./routes/carriers');

// Create server
const app = express();

// Middleware
app.use(express.json())

// routes
// Test route
app.get('/', (req, res) => {
    res.send('Hello world!')
})

// app.use('/quotes', quoteRoutes);
app.use('/carriers', carrierRoutes);

const PORT = 4010;
// Start server
app.listen(PORT, (err) => {
    if (err) {
        console.log('Error setting up server.')
    } else {
        console.log(`Server is running on http://localhost:${PORT}`)
    };

})
