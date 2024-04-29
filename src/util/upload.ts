import fs from 'fs';
import { diskStorage, StorageEngine } from 'multer';
import { readFile } from 'xlsx';
import { REGEX_NAME_FILE } from './regex';

const uploadDir = './src/module/upload';

export function initUploadDir(): string {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }
  return uploadDir;
}
export function configUploadFile(uploadDir: string): StorageEngine {
  const storage = diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now());
    },
  });
  return storage;
}

export function validateName(name: string): boolean {
  return REGEX_NAME_FILE.test(name);
}

export function validateSize(size: number): boolean {
  return size <= 10000000; // 10MB to Bytes (in decimal)
}

export function validateOpenFile(path: string): boolean {
  try {
    readFile(path);
    return true;
  } catch (e) {
    return false;
  }
}
