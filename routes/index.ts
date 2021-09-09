import {Router} from 'express';

import product from './product';
import customer from "./customer";
import provider from "./provider";

const router = Router();

router.use(product);
router.use(customer);
router.use(provider);

export default router;