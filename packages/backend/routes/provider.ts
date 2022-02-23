import {Router} from 'express';
import * as provider from "../controllers/provider";

const router = Router()

router.post('/provider', provider.postProvider);
router.get('/provider/:id', provider.getProvider);
router.get('/provider', provider.getAllProvider);
router.put('/provider/:id', provider.putProvider);

export default router;