import {Router} from "express";
import * as saleLedger from '../controllers/saleLedger';

const router = Router();

router.get('/saleLedger', saleLedger.getSaleLedger);

export default router;