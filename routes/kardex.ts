import {Router} from "express";
import * as kardex from '../controllers/kardex';

const router = Router();

router.post('kardex', kardex.setKardex);

export default router;