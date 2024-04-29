# DreameCloneTraining-BE-Project

# Require to install

```bash
yarn add multer body-parser xlsx
yarn add @types/multer -D
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
  - ![filename](https://github.com/PiedTeam/DreameCloneTraining-BE-Project/assets/136492579/3aeb9513-3f4b-48c7-9e86-bb3a8a91ca51)
- Validate File Size
  - ![size](https://github.com/PiedTeam/DreameCloneTraining-BE-Project/assets/136492579/43b8f4fe-99fa-41fa-a448-42ff9f231bd1)
- File not corrupted
  - ![corrupted](https://github.com/PiedTeam/DreameCloneTraining-BE-Project/assets/136492579/266c4793-870f-4534-ae74-5d8d1b08ff4b)
- Ok
  - ![ok](https://github.com/PiedTeam/DreameCloneTraining-BE-Project/assets/136492579/22429df4-ddb6-420a-b689-b5dfc0bd63d8)





