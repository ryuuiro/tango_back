module.exports = {
    calculator: function (req, res) {
        var a, b, result;
        var n = req.params.number;
        a = 0;
        b = 1;

        for (var i = 2; i <= n; i++) {
            result = a + b;
            a = b;
            b = result;
        }

        return res.json({a:result});
    }
};
