const fibonacciController = {
calculator: (req:number, res:any) => {
        var a = 0;
        var b = 1;
        var result;
        var n = req;

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

export default fibonacciController;
