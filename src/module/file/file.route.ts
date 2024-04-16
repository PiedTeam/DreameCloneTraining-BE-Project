import { Router } from 'express';
import multer from 'multer';
import { configUploadFile, initUploadDir } from '~/util/upload';
import { fileValidator } from './file.middleware';

const fileRouter = Router();

const storage = configUploadFile(initUploadDir());

const upload = multer({ storage: storage });

fileRouter.post('/upload', upload.single('myFile'), fileValidator);

export default fileRouter;
