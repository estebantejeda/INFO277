import {Router} from 'express';
import * as customer from '../controllers/customer';

const router = Router()

router.post('/customer', customer.setCustomer);

export default router;