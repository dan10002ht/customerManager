import {Router} from 'express';
import customerRoutes from './customerRoutes';

const router = new Router();

export default function route(app) {
  app.use('/api', router);
  router.use('/customer', customerRoutes);
}
