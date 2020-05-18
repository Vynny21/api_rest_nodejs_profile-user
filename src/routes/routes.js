import { Router } from 'express';
import multer from 'multer';
import multerConfig from '../config/multer';
import authMiddleware from '../app/middleware/auth';
import SessionController from '../app/controllers/SessionController';
import FileController from '../app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

// Não autenticadas
routes.post('/session', SessionController.store);

// Todas as rotas que forem chamadas a partir daqui tem que ser autenticadas
routes.use(authMiddleware);

routes.get('/dashboard', (req, res) => res.status(200).send());

routes.post('/files', upload.single('file'), FileController.store);

module.exports = routes;
