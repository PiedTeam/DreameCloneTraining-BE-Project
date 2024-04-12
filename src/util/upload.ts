import fs from 'fs'
import multer from 'multer'

const uploadDir = './src/module/upload'

export function initUploadDir() {
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }
  return uploadDir
}

export function configUploadFile(uploadDir: string) {
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  })
  return storage
}
