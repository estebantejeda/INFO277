import {Router} from 'express';

import product from './product';
import customer from "./customer";
import provider from "./provider";
import saleLedger from "./saleLedger";
import kardex from "./kardex";
import purchasLedger from "./purchaseLedger"
import purchase from "./purchase";

const router = Router();

router.use(product);
router.use(customer);
router.use(provider);
router.use(saleLedger);
router.use(kardex);
router.use(purchasLedger);
router.use(purchase);

export default router;