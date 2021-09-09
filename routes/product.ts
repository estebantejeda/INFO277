import {Router} from 'express';
import {setProduct} from '../controllers/product';

const router = Router()

router.post('/product', setProduct);

export default router;