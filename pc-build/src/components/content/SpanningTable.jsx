import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SpanningTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="center" colSpan={4}>
              RECOMMENDED BUILDS
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center"></TableCell>
            <TableCell align="center">Low Tier</TableCell>
            <TableCell align="center">Medium Tier</TableCell>
            <TableCell align="center">Pro Tier</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">$800</TableCell>
            <TableCell align="center">$1300</TableCell>
            <TableCell align="center">$2000</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.header.map((comp, index) => (
            <TableRow key={comp}>
              <TableCell align="center">{comp}</TableCell>
              <TableCell align="center">{props.description1[index]}</TableCell>
              <TableCell align="center">{props.description2[index]}</TableCell>
              <TableCell align="center">{props.description3[index]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
