import fs from "fs";
import { ContactInformation, Employee } from "../interface";

const EMPLOYEES_FILE_PATH = "./data/employees.json";

/**
 * Read employee list from JSON file
 * @returns List of employees
 */
export function getEmployees(): Employee[] {
  const data: Buffer = fs.readFileSync(EMPLOYEES_FILE_PATH);
  return JSON.parse(data.toString());
}

/**
 * Read employee conctact infromation JSON file. Filter list of contact
 * infromations by employeeId.
 * @returns Employee contact information
 */
export function getEmployeeContactInfo(employeeId: string): ContactInformation {
  throw new Error("Not implemented");
}
