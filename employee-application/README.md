# Employee application

frontend-directory contains React application served with Nextjs.

backend-directory contains Nodejs/Express API application.

## Task

### 27.09.2024 - Working solution added

Employee application consists of two pages: employee list and employee contact information. Employee contact information page can be found by clicking the 'employee id' cell in the employees table.

Employee contact information currently shows placeholder mock data. Replace it with actual data:

- Fix backend application to return contact information as JSON data for specific employee id.
- Fetch contact information data from the backend API in the frontend application. Display fetched data in the UI.

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
