import { readFile, utils } from 'xlsx';
import { ProductENType, ProductVIType } from '~/module/product/product.schema';
import { REGEX_ID_COLUMN } from './regex';

export function getFileData(path: string): object[] {
  const workbook = readFile(path);
  const sheetName = workbook.SheetNames[0];
  const data = utils.sheet_to_json(workbook.Sheets[sheetName]);
  return data as object[];
}

export function getColumnData(filePath: string, columnName: string): string[] {
  // Read the file
  const workbook = readFile(filePath);

  // Get the first sheet
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert the sheet to JSON
  const data = utils.sheet_to_json(sheet, { header: 0, raw: false });

  let firstColumn;

  if (isEnglishOrVietnamese(filePath)) {
    firstColumn = (data as ProductENType[]).map((row) => row[columnName as keyof ProductENType]);
  } else {
    firstColumn = (data as ProductVIType[]).map((row) => row[columnName as keyof ProductVIType]);
  }

  return firstColumn;
}

export function validateColumnId(data: number): boolean {
  return REGEX_ID_COLUMN.test(data.toString());
}

// isExistColumn("id", data[0]);
export function isExistColumn(column: string, data: object): boolean {
  return Object.prototype.hasOwnProperty.call(data, column);
}

export function isEnglishOrVietnamese(filePath: string): boolean {
  return filePath.includes('.en.') ? true : false;
}
