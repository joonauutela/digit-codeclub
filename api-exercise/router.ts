import express from "express";
import { employees } from "./data/employees";

export const router = express.Router();

/**
 * Get list of employees
 * @returns Employee[] in response body
 */
router.route("/employees").get((_req, res, _next) => {
  res.setHeader("Content-Type", "application/json");
  res.send(employees);
});

/**
 * Get employee
 * @param employeeId id for employee that is being searched
 * @returns Employee in response body
 */
router.route("/employees/:id").get((req, res, next) => {
  const employee = employees.find((employee) => employee.id === req.params.id)!;
  res.setHeader("Content-Type", "application/json");
  res.send(employee);
});
