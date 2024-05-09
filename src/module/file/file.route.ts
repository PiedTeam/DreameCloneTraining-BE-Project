import { Router } from 'express';
import multer from 'multer';
import { configExportFile, initExportDir } from '~/util/export';
import { configUploadFile, initUploadDir } from '~/util/upload';
import { exportValidator, uploadValidator } from './file.middleware';

const fileRouter = Router();

const storageUpload = configUploadFile(initUploadDir());
const handleUpload = multer({ storage: storageUpload });

const storageExport = configExportFile(initExportDir());
const handleExport = multer({ storage: storageExport });

/*
desc: validate file format when uploading
method: POST
path: /file/upload
headers: empty
body: form-data
  key: myFile (File)
  value: file
  description:
*/
fileRouter.post('/upload', handleUpload.single('myFile'), uploadValidator);

/*
desc: receive a valid file and export it
method: POST
path: /file/export
headers: empty
body: form-data
  key: myFile (File)
  value: file
  description:
*/
fileRouter.post('/export', handleExport.single('myFile'), exportValidator);

export default fileRouter;
