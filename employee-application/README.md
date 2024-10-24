# Employee application

frontend-directory contains React application served with Nextjs.

backend-directory contains Nodejs/Express API application.

## Task

Employee application consists of two pages: employee list and employee contact information. Employee contact information page can be found by clicking the 'employee id' cell in the employees table.

Once running locally employee list is found in:

```
http://localhost:3000/employees
```

Currently the application has only 1 unit test and no system tests in place. Create unit test for employeeService in employeeService.test.ts-file.

Create system tests for employee application in selenium directory.

## Local development

### Frontend application

Move to frontend directory:

```
cd frontend
```

Install dependencies:

```
npm install
```

Run application on port 3000:

```
npm run dev
```

### Backend application

Move to backend directory:

```
cd backend
```

Install dependencies:

```
npm install
```

Start application on port 3001:

```
npm start
```

Run unit tests:

```
npm run tests
```

### System tests

Move to selenium directory:

```
cd selenium
```

Install dependencies:

```
npm install
```

Run tests

```
npm run test
```
