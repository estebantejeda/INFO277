import {Router} from "express";
import * as purchaseLedger from "../controllers/purchaseLedger";

const router = Router();

router.post('/purchaseLedger', purchaseLedger.postPurchase);
router.get('/purchaseLedger', purchaseLedger.getAllPurchase);

export default router;