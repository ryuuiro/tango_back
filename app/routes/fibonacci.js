var router = require('express').Router();

router.get('/:number', function(req, res) {
    res.json({ message: req.params.number });
})

module.exports = router;
