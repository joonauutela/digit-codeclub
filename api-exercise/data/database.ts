const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");
const dbFile = "./data/employees.sqlite";

export let db: any = null;

// Employee data to be inserted
const employees = [
  {
    id: "439043",
    firstName: "Jaakko",
    lastName: "Virtanen",
    jobTitle: "Ohjelmistokehittäjä",
  },
  {
    id: "354155",
    firstName: "Milla",
    lastName: "Uotila",
    jobTitle: "Tuoteomistaja",
  },
];

export const initializeDB = () => {
  // Open a database connection (or create the database file if it doesn't exist)
  db = new sqlite3.Database(dbFile, (err: any) => {
    if (err) {
      console.error("Could not connect to database", err);
    } else {
      console.log("Connected to SQLite database");
    }
  });

  if (!fs.existsSync(dbFile)) {
    populateDB();
  }
};

const populateDB = () => {
  // Create a table and insert the employee data
  db.serialize(() => {
    // Create the employees table
    db.run(
      "CREATE TABLE IF NOT EXISTS employees (id TEXT PRIMARY KEY, firstName TEXT, lastName TEXT, jobTitle TEXT)"
    );

    // Insert employee data into the table
    const stmt = db.prepare(
      "INSERT INTO employees (id, firstName, lastName, jobTitle) VALUES (?, ?, ?, ?)"
    );
    employees.forEach((employee: any) => {
      stmt.run(
        employee.id,
        employee.firstName,
        employee.lastName,
        employee.jobTitle
      );
    });
    stmt.finalize();

    // Query the data to verify insertion
    db.each(
      "SELECT id, firstName, lastName, jobTitle FROM employees",
      (err: any, row: any) => {
        if (err) {
          console.error("Error retrieving data", err);
        } else {
          console.log(
            `Employee ID: ${row.id}, Name: ${row.firstName} ${row.lastName}, Job Title: ${row.jobTitle}`
          );
        }
      }
    );
  });
};
