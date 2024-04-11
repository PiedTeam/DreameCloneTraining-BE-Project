import { REGEX_NAME_FILE } from '../../util/regex'

export class FileName {
  constructor(private fileName: string) {
    this.fileName = fileName
  }

  validateFileName() {
    return REGEX_NAME_FILE.test(this.fileName) ? true : false
  }
}

export class FileNameList {
  constructor(private fileNames: string[]) {
    this.fileNames = fileNames
  }

  validateFileNames() {
    return this.fileNames.map((fileName) => {
      const isValid = new FileName(fileName).validateFileName()
      return { [fileName]: isValid }
    })
  }
}
