import {Router} from "express";
import * as parameters from '../controllers/parameters';

const router = Router();

router.post('/parameters', parameters.postParameters);
router.get('/parameters', parameters.getAllParameters);
router.put('/parameters/:id', parameters.putParameters);
router.delete('/parameters/:id', parameters.delParameters);

export default router;