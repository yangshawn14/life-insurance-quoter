const validateQuote = (req, res, next) => {
    // console.log('Validation running...')
    // console.log(req.body);
    // Check for birthdate 
    if (!req.body.birthdate) {
        return res.status(400).json({ error: 'Birthdate is missing' });
        // return res.status(400).send('Error: Birthdate is missing.');
    }

    // Check for valid coverage amount
    if (!req.body.coverageAmount || req.body.coverageAmount <= 0) {
        return res.status(400).json({ error: 'Invalid coverage amount' });
    }
    next();
}

module.exports = validateQuote;
