const fibonacciController = {
    calculator: (req:number, res:any) => {
        let a = 0;
        let b = 1;
        let result;
        const n = req;

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
