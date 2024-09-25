export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  jobTitle: string;
}

export interface ContactInformation {
  employeeId: string;
  mobile: string;
  email: string;
  address: string;
}
