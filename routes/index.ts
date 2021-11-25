import {Router} from 'express';

import product from './product';
import customer from "./customer";
import provider from "./provider";
import saleLedger from "./saleLedger";
import kardex from "./kardex";
import purchaseLedger from "./purchaseLedger"
import purchase from "./purchase";
import account from "./account";
import afp from "./afp"
import isapre from "./isapre";
import parameters from "./parameters";
import employee from "./employee";

const router = Router();

router.use(product);
router.use(customer);
router.use(provider);
router.use(saleLedger);
router.use(kardex);
router.use(purchaseLedger);
router.use(purchase);
router.use(account);
router.use(afp);
router.use(isapre);
router.use(parameters);
router.use(employee);

export default router;