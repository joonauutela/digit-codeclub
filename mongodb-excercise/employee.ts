import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  jobTitle: { type: String, required: true },
});

const Employee = mongoose.model(
  "Employee",
  employeeSchema,
  "employee-collection"
);

export default Employee;
