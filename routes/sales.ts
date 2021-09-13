import {Router} from "express";
import * as sales from "../controllers/sales";

const router = Router();

router.post('/sales', sales.postSale);

export default router;

