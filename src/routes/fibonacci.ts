import {Router} from 'express';
import fibonacciController from '../controllers/fibonacciController';
import { calculatorRequest } from '../types/Request';

const router = Router();

router.get('/:number', function(req: calculatorRequest, res: Response) {
    fibonacciController.calculator(req?.params?.number, res);
})

export default router;
