import { readFile, utils } from 'xlsx';

export function getFileData(path: string): object[] {
  const workbook = readFile(path);
  const sheetName = workbook.SheetNames[0];
  const data = utils.sheet_to_json(workbook.Sheets[sheetName]);
  return data as object[];
}
