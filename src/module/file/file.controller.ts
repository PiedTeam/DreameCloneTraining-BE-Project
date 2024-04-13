import File from './file.schema'

export function validateFile(fileInstance: File) {
  if (!fileInstance.validateName()) {
    return {
      isValid: false,
      result: {
        message: 'Invalid file name',
        describe: 'File name must follow by <Category Dreame.vi/en.xls/xlsx/cvs>'
      }
    }
  }
  if (!fileInstance.validateSize()) {
    return {
      isValid: false,
      result: {
        message: 'Invalid file size',
        describe: 'File size must be smaller or equal than 10MB'
      }
    }
  }
  if (!fileInstance.validateOpenFile()) {
    return {
      isValid: false,
      result: {
        message: 'Invalid file',
        describe: 'File is corrupted'
      }
    }
  }
  return {
    isValid: true
  }
}
