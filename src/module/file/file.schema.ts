import XLSX from 'xlsx'
import { REGEX_NAME_FILE } from '~/util/regex'
interface FileType {
  fieldname: string
  originalname: string
  encoding: string
  mimetype: string
  destination: string
  filename: string
  path: string
  size: number
}

export default class File {
  constructor(private file: FileType) {
    this.file = file
  }

  get getFile() {
    return this.file
  }

  get getName() {
    return this.file.originalname
  }

  get getSize() {
    return this.file.size
  }

  validateName() {
    const { originalname } = this.file
    return REGEX_NAME_FILE.test(originalname)
  }

  validateSize() {
    const { size } = this.file
    return size <= 10000000 //10MB to Bytes (in decimal)
  }

  validateOpenFile() {
    try {
      const workbook = XLSX.readFile(this.file.path)

      // Get the name of the first sheet
      const sheetName = workbook.SheetNames[0]

      // Get the data from the first sheet
      const worksheet = workbook.Sheets[sheetName]
      return true
    } catch (e) {
      //if reach here, the file is only corrupted
      return false
    }
  }
}
