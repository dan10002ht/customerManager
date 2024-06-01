import {Router} from 'express';
import * as customerController from '../controllers/customerController';

const router = new Router();

router.post('/', customerController.add);
router.get('/list', customerController.getList);
router.get('/:id', customerController.getOne);
router.put('/:id', customerController.edit);

export default router;
