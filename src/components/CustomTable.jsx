import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import theme from '../theme';


const CustomTable = ({data}) => {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{backgroundColor:theme.palette.primary.darker}}>
          <TableRow >
            <TableCell sx={{ color: "#ffffff" }}>CANDIDATE NAME</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>APPLICATION STATUS</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>APPLIED ROLE</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>APPLICATION DATE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.candidateName}</TableCell>
              <TableCell>{row.applicationStatus}</TableCell>
              <TableCell>{row.appliedRole}</TableCell>
              <TableCell>{row.applicationDate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
