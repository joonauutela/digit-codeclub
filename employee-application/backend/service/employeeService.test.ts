import fs from "fs";
import { getEmployees } from "./employeeService";
import { Employee } from "../interface";

// Mock the fs module
jest.mock("fs");

describe("File Service Tests", () => {
  const mockEmployees: Employee[] = [
    { id: "1", firstName: "John", lastName: "Doe", jobTile: "Developer" },
    { id: "2", firstName: "Jane", lastName: "Smith", jobTile: "Designer" },
  ];

  beforeEach(() => {
    // Clear the mocks before each test
    jest.clearAllMocks();
  });

  describe("getEmployees", () => {
    it("should return a list of employees", () => {
      // Mock the file reading behavior for employees.json
      (fs.readFileSync as jest.Mock).mockReturnValue(
        JSON.stringify(mockEmployees)
      );

      const employees = getEmployees();

      // Check if the returned value matches the mock data
      expect(employees).toEqual(mockEmployees);
      expect(fs.readFileSync).toHaveBeenCalledWith("./data/employees.json");
    });

    it("should throw an error if employee file is unreadable", () => {
      fail("not implemented");
    });
  });

  describe("getEmployeeContactInfo", () => {
    it("should return contact information for a given employee ID", () => {
      fail("not implemented");
    });

    it("should return undefined if employee ID is not found", () => {
      fail("not implemented");
    });

    it("should throw an error if contact info file is unreadable", () => {
      fail("not implemented");
    });
  });
});
