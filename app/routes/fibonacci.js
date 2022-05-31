var router = require('express').Router();
var fibonacciController = require ('../controllers/fibonacciController')

router.get('/:number', function(req, res) {
    fibonacciController.calculator(req, res);
})

module.exports = router;
