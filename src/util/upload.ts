import fs from 'fs';
import { diskStorage, StorageEngine } from 'multer';
import { readFile, utils } from 'xlsx';
import { PRODUCT_TITLE_EN } from '~/module/file/file.enum';
import File from '~/module/file/schema/file.schema';
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

function getDataFile(file: File, header: boolean): string[] {
  const path = file.getPath;
  const workbook = readFile(path);
  const sheetNameList = workbook.SheetNames;
  const sheet = workbook.Sheets[sheetNameList[0]];

  // Convert sheet to JSON with the first row as the header
  const fullData = utils.sheet_to_json(sheet, { header: 1 });

  // if header is true, it will return full data (title and data inside)
  // else it will return the data only
  if (header) {
    return fullData as string[];
  } else {
    // remove the first element (title of the columns)
    fullData.shift();
    return fullData as string[];
  }
}

// validate inside file
export function validateTitle(file: File): boolean {
  try {
    // Convert sheet to JSON with the first row as the header
    const data = getDataFile(file, true);

    // Extract the first row as the title of columns
    const title = data[0];

    // Adjust the Enum here to retrieve the title of the columns
    const enumValues = Object.values(PRODUCT_TITLE_EN);
    console.log(title);

    console.log(enumValues);

    // Bring to compare the title with the enum values
    for (const item of enumValues) {
      if (!title.includes(item)) {
        return false;
      }
    }
    return true;
  } catch (e) {
    return false;
  }
}
