# DreameCloneTraining-BE-Project

# Require to install

```bash
yarn add multer body-parser xlsx
```

- This is the data of file transfer by multer

```json
{
  "fieldname": "myFile",
  "originalname": "demo.txt",
  "encoding": "7bit",
  "mimetype": "text/plain",
  "destination": "./uploads",
  "filename": "myFile-1712912837970",
  "path": "uploads/myFile-1712912837970",
  "size": 7
}
```

```text
description: validate file format
method: POST
path: /file/upload
body{
  form-data: {
    myFile: file
  }
}
```

## In this section, i've created a file upload API with the following features:

- Validate File Name
- Validate File Size
- File not corrupted
