import {Router} from "express";
import * as afp from '../controllers/afp';

const router = Router();

router.post('/afp', afp.postAfp);
router.get('/afp/:id', afp.getAfp);
router.get('/afp', afp.getAllAfp);
router.put('/afp/:id', afp.putAfp);
router.delete('/afp/:id', afp.delAfp);

export default router;