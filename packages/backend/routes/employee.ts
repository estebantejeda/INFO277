import {Router} from "express";
import * as employee from '../controllers/employee';

const router = Router();

router.post('/employee', employee.postEmployee);
router.get('/employee/:id', employee.getEmployee);
router.get('/employee', employee.getAllEmployee);
router.put('/employee/:id', employee.putEmployee);
router.delete('/employee/:id', employee.delEmployee);

export default router;