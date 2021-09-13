import {Router} from 'express';
import * as customer from '../controllers/customer';

const router = Router()

router.post('/customer', customer.postCustomer);
router.get('/customer/:id', customer.getCustomer);
router.get('/customer', customer.getAllCustomer);
router.put('/customer/:id', customer.putCustomer);

export default router;