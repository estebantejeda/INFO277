import {Router} from "express";
import * as saleLedger from '../controllers/saleLedger';

const router = Router();

router.post('/saleLedger', saleLedger.postSale);

export default router;