import {Router} from "express";
import * as purchase from '../controllers/purchase';

const router = Router();

router.post('/purchase', purchase.postPurchase);
router.get('/purchase', purchase.getAllPurchase);
router.get('/purchaseSum', purchase.getSumPurchase);

export default router;