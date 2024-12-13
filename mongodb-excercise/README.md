## Task

This excercise consists of MongoDB database and a Nodejs API that connects to it.

Goal of this exercise is to show a list of employees from MongoDB database. Employees can be filtered by job title.

#### Step 1

Spin up local MongoDB server. Create a database called `employee-db`.

After the database is created, create a collection called `employee-collection`.

#### Step 2

Add data to MongoDB collection:

    {
        "firstName": "Kalle",
        "lastName": "Virtanen",
        "jobTitle": "Developer"
    },
    {
        "firstName": "Liisa",
        "lastName": "Jokinen",
        "jobTitle": "Product Owner"
    }

#### Step 3

Make changes to the NodeJs application (implement methods in service.ts so that data is queried from MongoDB).

Query 1:

`https://localhost:3001/employees`

Should return list of all employees.

Query 2:

`https://localhost:3001/employees?title=Developer`

Should return list of employees with title developer.

## Local development

Install dependencies:

```
npm install
```

Run application on port 3001:

```
npm start
```
