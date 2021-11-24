import {Router} from "express";
import * as isapre from '../controllers/isapre';

const router = Router();

router.post('/isapre', isapre.postIsapre);
router.get('/isapre', isapre.getAllIsapre);
router.put('/isapre/:id', isapre.putIsapre);
router.delete('/isapre/:id', isapre.delIsapre);

export default router;