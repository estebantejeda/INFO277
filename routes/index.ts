import {Router} from 'express';

import product from './product';
import customer from "./customer";
import provider from "./provider";
import saleLedger from "./saleLedger";

const router = Router();

router.use(product);
router.use(customer);
router.use(provider);
router.use(saleLedger);

export default router;