import {Router} from 'express';

import product from './product';
import customer from "./customer";
import provider from "./provider";
import saleLedger from "./saleLedger";
import kardex from "./kardex";

const router = Router();

router.use(product);
router.use(customer);
router.use(provider);
router.use(saleLedger);
router.use(kardex);

export default router;