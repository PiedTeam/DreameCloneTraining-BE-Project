import { validateName, validateOpenFile, validateSize } from '~/util/upload';
import File from './file.schema';

interface ValidationResult {
  isValid: boolean;
  result?: {
    message: string;
  };
}

export function validateFile(fileInstance: File): ValidationResult {
  const isValidName = validateName(fileInstance.getName);
  const isValidSize = validateSize(fileInstance.getSize);
  const isCorrupted = validateOpenFile(fileInstance.getFile.path);

  if (!isValidName) {
    return {
      isValid: false,
      result: {
        message: 'Invalid file name',
      },
    };
  }

  if (!isValidSize) {
    return {
      isValid: false,
      result: {
        message: 'File size is too large, ensure it is less than 10MB',
      },
    };
  }

  if (!isCorrupted) {
    return {
      isValid: false,
      result: {
        message: 'File is corrupted',
      },
    };
  }

  return {
    isValid: true,
  };
}