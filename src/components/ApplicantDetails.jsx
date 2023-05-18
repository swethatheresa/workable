import React from 'react'
import Applicant from './Applicant'
import Grid from '@mui/material/Unstable_Grid2'; 
import { Button, Typography } from '@mui/material';
import theme from '../theme';
import ApplicantList from './ApplicantList';


const ApplicantDetails = () => {
  return (
    <Grid container flexDirection={'row'} justifyContent={'space-between'}>
        <Applicant />
        <ApplicantList/>
    </Grid>

  )
}

export default ApplicantDetails
