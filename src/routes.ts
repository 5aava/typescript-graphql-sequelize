import express from 'express';
import swaggerUi from 'swagger-ui-express';

const router = express.Router();


router.use('/swagger', swaggerUi.serve);

export default router;
