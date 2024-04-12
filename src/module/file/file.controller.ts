import { FileName } from './file.model'

export function validateFileName(name: string) {
  return new FileName(name).validateFileName()
}
