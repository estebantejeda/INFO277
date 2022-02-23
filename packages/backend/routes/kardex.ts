import {Router} from "express";
import * as kardex from '../controllers/kardex';

const router = Router();

router.get('/kardex', kardex.getKardex);

export default router;