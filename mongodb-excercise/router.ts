import express from "express";
import { getEmployees, getEmployeesByJobTitle } from "./service";

export const router = express.Router();

/**
 * Get list of employees
 * @param title - get employees with specific job title if present
 *                in query parameters
 */
router.route("/employees").get(async (_req, res, _next) => {
  const jobTitle = _req.query.title;
  if (jobTitle) {
    res.json(await getEmployeesByJobTitle(jobTitle.toString()));
  } else {
    res.json(await getEmployees());
  }
});
