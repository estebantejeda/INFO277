import {Router} from "express";
import * as purchase from '../controllers/purchase';

const router = Router();

router.post('/purchase', purchase.postPurchase);

export default router;