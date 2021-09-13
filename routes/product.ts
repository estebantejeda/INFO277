import {Router} from 'express';
import * as product from '../controllers/product';

const router = Router()

router.post('/product', product.postProduct);
router.get('/product/:id', product.getProduct);
router.get('/product', product.getAllProduct);
router.put('/product/:id', product.putProduct);

export default router;