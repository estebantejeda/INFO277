import {Router} from "express";
import * as parameters from '../controllers/parameters';

const router = Router();

router.post('/parameters', parameters.postParameters);
router.post('/parameters', parameters.getAllParameters);
router.post('/parameters/:id', parameters.putParameters);
router.post('/parameters/:id', parameters.delParameters);

export default router;