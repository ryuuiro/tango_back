import { Router } from 'express';
import fibonacci from './fibonacci';

const router = Router();

router.use('/fibonacci', fibonacci);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'You are conected to API' });
});

export default router;
