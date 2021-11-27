import {Router} from "express";
import * as assetsDiscount from '../controllers/assetsDiscount'

const router = Router();

router.post('/assetsDiscount', assetsDiscount.postAssetsDiscount);
router.post('/assetsDiscountGenerate', assetsDiscount.postGenerateAssetsDiscount);

export default router;