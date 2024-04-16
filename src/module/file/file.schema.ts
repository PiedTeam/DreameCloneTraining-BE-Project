interface FileType {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: number;
}

export default class File {
  constructor(private file: FileType) {
    this.file = file;
  }

  get getFile(): FileType {
    return this.file;
  }

  get getName(): string {
    return this.file.originalname;
  }

  get getSize(): number {
    return this.file.size;
  }
}
