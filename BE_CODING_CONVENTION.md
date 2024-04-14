# BE_CODING_CONVENTION.md

> **IMPORTANT**:
> Code to be Maintain later
> Variable, File, Folder **MUST NOT** contain `'s'`
> Whole `src` **MUST NOT** exist the hyphen `-`

```
bad: users, products, ...

good: user, product, ...

or: userArray, userList, userCollection, ... (the return data types)

bad: customer-report
```

- Use [Eslint Typescript](https://typescript-eslint.io/getting-started/) format suggestion
- Use [Prettier](https://prettier.io/docs/en/#docsNav)
- Use [Husky](https://typicode.github.io/husky/how-to.html)

- File and Model names need to be identical.

```
good: folder: student, file: student.route.ts  
```

- Export to ES6

# Interact between FE and BE

> JSON property must follow the **snake_case** to distinguish it from Class properties

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

- Use `camelCase`
- Must not begin with a digit
- Must not contain special characters

```
bad: User, User-Report, User_Report, UserReport, @userReport
good: user, userReport
```

# File Name

- Use `camelCase`
- Must not begin with a digit
- Must not contain special characters
- Good

```ts
user.middleware.ts, userReport.middleware.ts, product.controller.ts;
```

- Bad

```ts
Users, products.Controller, ...
```

# Class Name

- Use `PascalCase`
- Must not begin with a digit
- Must not contain special characters
- Good

```ts
User, UserReport;
```

- Bad

```ts
user, userReport, user_report;
```

# Properties of Class

- Use `PascalCase`
- Must not begin with a digit
- Must not contain special characters
- Good

```ts
userId, userName;
```

- Bad

```ts
user_id, user_name, user - name;
```

# Enum Name

- Use `UPPER_CASE`

```ts
export enum USER_ROLE {
  ADMIN,
  STAFF,
  STUDENT,
}
```

# Type

- Use `PascalCase`
- N + 'Type'

```ts
export type UserType = {
  userId: string;
  userName: string;
};
```

# Interface

- 'I' + `PascalCase`

```ts
export interface IUser {
  userId: string;
  userName: string;
}
```

# Function

- Use `camelCase`
- **Must start with a verb**
- Must not begin with a digit.
- Must not contain special characters
- Good:

```ts
function getUser() {}
```

- Bad

```ts
function get_user() {}
function get-user() {}
```

# Function Documentation

- **After each function update need to update the version**
- Just write full lowercase

```ts
/**
 * check if a number is a prime
 * @param {number} num - number need to check
 * @returns {Boolean} - true or false
 * @example isPrime(5)
 * @description
 * this function check whether a number is a prime number. return false if the input is not a integer
 * @author hoangnn
 * @version 0.0.1
 */
function isPrime(num: number): Boolean {
  // Logic
  // ...
}
```

# Variables

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

```ts
function getUser() {
  // logic
}
```

- Bad

```ts
const getUser = () => {
  // logic
};
```

# Route

- Must

```ts
/*
desc: add new course
method: POST
path: /course/add-new-course
headers: {
	params: ... (require or not)
	query: ... (require or not)
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
