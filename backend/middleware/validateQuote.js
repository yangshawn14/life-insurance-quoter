const validateQuote = (req, res, next) => {
    if (!req.body.birthdate) {
        return res.status(400).send('Error: Birthdate is missing.');
    }
    next();
}

module.exports = validateQuote;
