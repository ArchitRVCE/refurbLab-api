import { Router } from 'express';
import { productRoutes } from './productRoutes'; // create files as needed

const router = Router();

router.use('/products', productRoutes);

export default router;
