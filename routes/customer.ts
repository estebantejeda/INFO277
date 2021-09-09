import {Router} from 'express';
import {setCustomer} from '../controllers/customer';

const router = Router()

router.post('/customer', setCustomer);

export default router;