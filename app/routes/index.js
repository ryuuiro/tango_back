var router = require('express').Router();

var fibonacci = require('./fibonacci');

router.use('/fibonacci', fibonacci);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'You are conected to API' });
});

module.exports = router;
