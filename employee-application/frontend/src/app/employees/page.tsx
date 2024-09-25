import EmployeeList from "./components/EmployeeList";
import { Employee } from "../../../interfaces";
import GenericError from "../components/GenericError";
import { API_BASE_URL, DEFAULT_OPTIONS } from "../api";

export default async function Page() {
  const response = await fetch(`${API_BASE_URL}/employees`, DEFAULT_OPTIONS);

  if (!response.ok) {
    return <GenericError />;
  }

  const employees: Employee[] = await response.json();

  return <EmployeeList employees={employees} />;
}
