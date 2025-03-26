import express from "express";
import { db } from "./data/database";

export const router = express.Router();

/**
 * Get employee
 * @param employeeId id for employee that is being searched
 * @returns Employee in response body
 */
router.route("/employees").get((req, res, next) => {
  const query = `SELECT * FROM employees WHERE id = ${req.query.id}`;

  db.all(query, (err: any, rows: any) => {
    if (err) {
      console.error("Error retrieving data", err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(rows);
    }
  });
});
