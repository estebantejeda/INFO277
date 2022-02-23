import {Router} from "express";
import * as account from '../controllers/account';

const router = Router();

router.post('/account/', account.postAccount);
router.get('/account/:id', account.getAccount);
router.get('/account', account.getAllAccount);

export default router;