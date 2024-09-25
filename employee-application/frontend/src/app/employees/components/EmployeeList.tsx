import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Employee } from "../../../../interfaces";
import Link from "next/link";

interface EmployeeListProps {
  employees: Employee[];
}

export default function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <b>Employee id</b>
            </TableCell>
            <TableCell align="right">
              <b>First name</b>
            </TableCell>
            <TableCell align="right">
              <b>Last name</b>
            </TableCell>
            <TableCell align="right">
              <b>Job title</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => (
            <TableRow
              key={employee.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link
                  style={{ textDecoration: "underline", color: "#087fa7" }}
                  href={`contactinfo/${employee.id}`}
                >
                  {employee.id}
                </Link>
              </TableCell>
              <TableCell align="right">{employee.firstName}</TableCell>
              <TableCell align="right">{employee.lastName}</TableCell>
              <TableCell align="right">{employee.jobTitle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
