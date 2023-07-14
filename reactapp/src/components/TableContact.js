import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, role, phone, altphone) {
  return { name, role, phone, altphone };
}

const rows = [
  createData("Raavi Das", "Supervisor", 8920192931, 7904686536),
  createData("Jacob","Asst. Supervisor",8903643170, 765234091),
  createData("Tulak","Union Leader", 948898682, 1297321),
  createData("Pot Head","Worker", 8903643170,  9470892341),
  createData("Ginger", "Offloader",8920192931, 967234123452)
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Role</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Alternate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.role}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.altphone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
