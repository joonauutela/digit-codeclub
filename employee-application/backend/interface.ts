export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  jobTile: string;
}

export interface ContactInformation {
  id: string;
  employeeId: string;
  email: string;
  mobile: string;
  address: string;
}
