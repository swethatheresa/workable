import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; 
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

const ApplicantList = () => {
  return (
    <Grid container flexDirection={'column'}
        sx={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '9px',
            p: '2rem',
            m : '1.5rem',
        }}
      >
        <Typography variant="heading1" sx={{ fontWeight:'bold' }}>
            120 Applicants
        </Typography>
        <Grid container spacing={3} direction="row" justifyContent="space-between" wrap="wrap" sx={{mt:'1em'}}>
                <FormControlLabel
                control={<Checkbox />}
                label="Unmarked"
            />
            <FormControlLabel
                control={<Checkbox />}
                label="Accepted"
            />
            <FormControlLabel
                control={<Checkbox />}
                label="Rejected"
            />
        </Grid>
      <Grid container direction="column" justifyContent="space-between" sx={{mt:'1em'}}>
      <Typography variant="heading1" sx={{fontSize:'1.3em'}}>Applicant 1</Typography>
      <Typography variant="heading1"sx={{fontSize:'1.3em'}}>Applicant 2</Typography>
      <Typography variant="heading1"sx={{fontSize:'1.3em'}}>Applicant 3</Typography>
      </Grid>
      </Grid>
  )
}

export default ApplicantList
