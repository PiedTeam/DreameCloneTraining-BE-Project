import fs from 'fs';
import { StorageEngine, diskStorage } from 'multer';

const exportDir = './src/module/export';

export function initExportDir(): string {
  if (!fs.existsSync(exportDir)) {
    fs.mkdirSync(exportDir);
  }
  return exportDir;
}

export function configExportFile(exportDir: string): StorageEngine {
  const storage = diskStorage({
    destination: function (req, file, cb) {
      cb(null, exportDir);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now());
    },
  });
  return storage;
}
