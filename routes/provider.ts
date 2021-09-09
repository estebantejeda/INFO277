import {Router} from 'express';
import {setProvider} from "../controllers/provider";

const router = Router()

router.post('/provider', setProvider);

export default router;