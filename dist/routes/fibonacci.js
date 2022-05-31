var router = require('express').Router();
var fibonacciController = require('../controllers/fibonacciController');
router.get('/:number', function (req, res) {
    fibonacciController.calculator(req.params.number, res);
});
module.exports = router;
//# sourceMappingURL=fibonacci.js.map
