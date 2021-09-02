import { Router } from 'express';

import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './Categories.routes';
import { specificationRoutes } from './specification.routes';
import { usersRoutes } from './users.routes';

const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specification', specificationRoutes);
router.use('/users', usersRoutes);
router.use(authenticateRoutes);

export { router };