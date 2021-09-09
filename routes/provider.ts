import {Router} from 'express';
import * as provider from "../controllers/provider";

const router = Router()

router.post('/provider', provider.setProvider);

export default router;