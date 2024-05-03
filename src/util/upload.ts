import fs from 'fs';
import { diskStorage, StorageEngine } from 'multer';
import { readFile, utils } from 'xlsx';
import { PRODUCT_TITLE_EN, PRODUCT_TITLE_VI } from '~/module/file/file.enum';
import File from '~/module/file/file.schema';
import { isEnglishOrVietnamese } from './file';
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

export function getDataFile<T>(file: File, header: boolean, typeOfData: 'array' | 'object'): T[] {
  const path = file.getPath;
  const workbook = readFile(path);
  const sheetNameList = workbook.SheetNames;
  const sheet = workbook.Sheets[sheetNameList[0]];

  let fullData;
  if (typeOfData === 'object') {
    // header : 0 -> the data will be object[]
    fullData = utils.sheet_to_json(sheet, { header: 0 });
  } else if (typeOfData === 'array') {
    // header: 1 -> the data will be array[]
    fullData = utils.sheet_to_json(sheet, { header: 1 });
  }

  // with header or without header, the typeOfData 'object' will remain full data
  // only accept header is true for typeOfData 'array' will remain, if header is false, remove the header
  if (((header || !header) && typeOfData === 'object') || (header && typeOfData === 'array')) {
    return fullData as T[];
  } else if (!header && typeOfData === 'array') {
    fullData?.shift();
    return fullData as T[];
  } else {
    return [];
  }
}

// validate inside file
export function validateTitle(file: File): boolean {
  try {
    // Convert sheet to JSON with the first row as the header
    const data = getDataFile<string[]>(file, true, 'array');

    // Extract the first row as the title of columns
    const title = data[0];

    // Adjust the Enum here to retrieve the title of the columns

    let enumValues;

    if (isEnglishOrVietnamese(file.getPath)) {
      enumValues = Object.values(PRODUCT_TITLE_EN);
    } else {
      enumValues = Object.values(PRODUCT_TITLE_VI);
    }

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

// export function isMatchDataType(file: File): boolean {
//   try {
//   } catch (e) {
//     return false;
//   }
// }
