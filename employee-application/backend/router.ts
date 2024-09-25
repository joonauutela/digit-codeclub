import express from "express";
import { getEmployees } from "./service/employeeService";

export const router = express.Router();

/**
 * Get list of employees
 * @returns Employee[] in response body
 */
router.route("/employees").get((_req, res, _next) => {
  res.send(getEmployees());
});

/**
 * Get employee contact information
 * @param employeeId employee for which contact information is fetched
 * @returns ContactInformation in response body
 */
router.route("/contactinfo/:employeeId").get((req, res, next) => {
  throw new Error("Not implemented");
});
