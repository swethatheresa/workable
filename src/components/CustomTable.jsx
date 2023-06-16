import {useEffect, useState, React} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import theme from '../theme';
import { fetchApplicants,fetchApplicantsByStatus } from '../services/Applicants';
import { useNavigate } from 'react-router-dom';

const CustomTable = (data) => {
  const [applicants, setApplicants] = useState(null);
  const navigate = useNavigate();
  const handleApplicant = (applicantid) => {
    navigate(`/applicantdetails/${data.id}/${applicantid}`);
  };
  useEffect(() => {
      if(data.status)
      {
        fetchApplicantsByStatus(data.id,data.status).then((res) => {
          setApplicants(res);
        });
      }
      else 
      {
        fetchApplicants(data.id).then((res) => {
          setApplicants(res);
        });
      }
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead sx={{backgroundColor:theme.palette.primary.darker}}>
          <TableRow >
            <TableCell sx={{ color: "#ffffff" }}>CANDIDATE NAME</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>APPLICATION DATE</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>E-MAIL ID</TableCell>
            <TableCell sx={{ color: "#ffffff" }}>CONTACT NUMBER</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applicants && Array.isArray(applicants) && applicants.map((row, index) => (
            <TableRow key={index} sx={{cursor:'pointer'}} onClick={()=>handleApplicant(row.id)} >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.appliedDate.toDate().toDateString()}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contactNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;
