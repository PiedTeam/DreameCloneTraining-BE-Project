import { REGEX_NAME_FILE } from '~/util/regex'

export function validateFileName(name: string) {
  return REGEX_NAME_FILE.test(name)
}

export function validateFileSize(size: number) {
  return size > 1000000
}
