import express from 'express';
import rolesRouter from './roles/index.js';

const router = express.Router();

router.use('/roles', rolesRouter);

export default router;