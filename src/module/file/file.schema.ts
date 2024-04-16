interface IFileType {
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
  constructor(private file: IFileType) {
    this.file = file;
  }

  get getFile(): IFileType {
    return this.file;
  }

  get getName(): string {
    return this.file.originalname;
  }

  get getSize(): number {
    return this.file.size;
  }

  get getPath(): string {
    return this.file.path;
  }

  get getLanguage(): string {
    // Product Dreame.vi.xlsx
    // get the vi part
    return this.file.originalname.split('.')[1];
  }

  get getExtension(): string {
    // Product Dreame.vi.xlsx
    // get the xlsx part
    return this.file.originalname.split('.')[2];
  }
}

// EN for English and VN for Vietnamese
// type ProductFileTypeEN = {
//   id: string;
//   Name:
//
// }
