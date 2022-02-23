import {Router} from "express";
import * as assetsDiscount from '../controllers/assetsDiscount'

const router = Router();

router.post('/assetsDiscount', assetsDiscount.postAssetsDiscount);
router.post('/assetsDiscountGenerate', assetsDiscount.postGenerateAssetsDiscount);
router.get('/assetsDiscount/:employeeId', assetsDiscount.getAssetsDiscount);
router.get('/assetsDiscountDetail/:id', assetsDiscount.getAssetsDiscountDetail);
router.get('/assetsAllDiscountDetail/:date', assetsDiscount.getAllAssetsDiscountDetail);
router.get('/assetsDiscountDate', assetsDiscount.getDateAssetsDiscount);

export default router;