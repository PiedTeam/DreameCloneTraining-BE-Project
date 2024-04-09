# BE_CODING_CONVENTION.md

- **IMPORTANT**:
  - For easier to maintain code later
  - Variable, File, Folder **must** not contain `'s'`

```
bad : users, products, ...
good: user, product, ...
or  : userArray, userList, userCollection, ... (the return data types)
```

- **NOTE**: whole `src` do not exist the hyphen `-`

  > customer-report (BAD)

- Use Eslint Typescript format suggestion: https://typescript-eslint.io/getting-started/
- Use Prettier
- Use Husky
- File and Component names need to be identical.
- Use PascalCase naming convention for filename as well as component name
- Using const for naming variables
- Use ES6 Syntax

# Interact between FE and BE

- For `json` the property must follow the **snake_case**

  > To distinguish it from Class properties

- Good

```json
{
  "entity_property": "value"
}
```

- Bad

```json
{
  "entityProperty": "value"
}
```

- Exp

```json
{
  "status": 200,
  "message": "success",
  "data": {
    "user_id": "123",
    "user_name": "John Doe"
  }
}
```

# Folder Name (entity)

- `camelCase`
- Must not begin with a digit.
- Must not contain special characters

- Good

```
user, userReport, userReport
```

- Bad

```js
User, User - Report, User_Report, UserReport;
```

# File Folder

- use `camelCase`
- Good

```
user.middleware.ts, userReport.middleware.ts, product.controller.ts
```

- Bad

```
Users, products.Controller, ...
```

# Class Folder

- Use `PascalCase`
- Must not begin with a digit.
- Must not contain special characters
- Good

```
User, UserReport
```

- Bad

```
user, userReport, user_report
```

# Properties of Class

- Use `PascalCase`
- Must not begin with a digit.
- Must not contain special characters
- Good

```
userId, userName
```

- Bad

```
user_id, user_name, user-name
```

# enum

- UPPER_CASE

```js
export enum USER_ROLE {
    ADMIN,
    STAFF,
    STUDENT
}
```

# type

- PascalCase
- N + 'Type'

```js
export type UserType = {
	userId: string
	userName: string
}
```

# interface

- 'I' + PascalCase

```js
export interface IUser {
	userId: string
	userName: string
}
```

# function

- Use `camelCase`
- Must not begin with a digit.
- Must not contain special characters
- Good:

```
getUser
```

- Bad

```
get_user, get-user
```

# variables

- Variable names can contain alphabets and numeric digits.
- They cannot contain spaces and special characters, except the underscore (\_) and the dollar ($) sign.
- Variable names cannot begin with a digit.

- Good

```js
const userName = "JohnDoe";
```

- Bad

```js
const 1_userName = "JohnDoe";
```

# Should use function declaration than function arrow

- Good

```js
function getUser() {
  // logic
}
```

- Bad

```js
const getUser = () => {
  // logic
};
```

# Function Documentation

- After each function update, the version must be updated

```js
/**
 * Kiểm tra xem một số có phải là số nguyên tố hay không.
 * @param {number} num - Số cần kiểm tra.
 * @returns {boolean} - True nếu số nguyên tố, false nếu không phải.
 * @example isPrime(5)
 * @description
 * Hàm này kiểm tra xem số được cung cấp có phải là số nguyên tố hay không.
 * Số nguyên tố là số chỉ chia hết cho 1 và chính nó.
 * @author [Tên tác giả]
 * @version 0.0.1
 */
function isPrime(num) {
  // Logic kiểm tra số nguyên tố ở đây
  // ...
}
```

# Route

- Must

```js
/*
desc: add new course
method: POST
path: /course/add-new-course
headers: {
	params: ... (có hoặc không)
	query: ... (có hoặc không)
	Authorization: Bearer <access_token>
}
body: AddNewCourseReqBodyType (syntax feature+ReqBodyType)
*/
courseRouter.post(
  "/add-new-course",
  accessTokenValidator,
  checkRole([UserRole.Admin]),
  addNewCourseMiddleware,
  addNewCourseController
);
export default courseRouter;
```

# Exception
