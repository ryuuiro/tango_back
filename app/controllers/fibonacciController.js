module.exports = {
    calculator: function (req, res) {
        var a, b, result;
        var n = req.params.number;
        a = 0;
        b = 1;

        if(n > 1) {
            for (var i = 2; i <= n; i++) {
                result = a + b;
                a = b;
                b = result;
            }
        } else {
            result = n > 0 ? 1 : 0;
        }

        return res.json({result});
    }
};
