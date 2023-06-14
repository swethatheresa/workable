import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; 
import { Checkbox, FormControlLabel, Typography } from '@mui/material';
import theme from '../theme';
import Divider from '@mui/material/Divider';

const ApplicantList = () => {
  return (
    <Grid container flexDirection={'column'}
        sx={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '9px',
            p: '2rem',
            m : '1.5rem',
            width: '25vw',
            [theme.breakpoints.down('md')]: {
                width: '100%',
                m : '0px',
                boxShadow: 'none',
            },
        }}
      >
        <Typography variant="heading1" 
          sx={{ 
                fontWeight:'bold',
                [theme.breakpoints.down('md')]: {
                    fontSize: '1.5rem',
                },
                }}>
            120 Applicants
        </Typography>
        <Grid container spacing={2} direction="row" justifyContent="space-between" wrap="wrap" sx={{mt:'1em'}}>
                <FormControlLabel
                control={<Checkbox />}
                label="Selected"
            />
            <FormControlLabel
                control={<Checkbox />}
                label="Not Selected"
            />
            <FormControlLabel
                control={<Checkbox />}
                label="Shortlisted"
            />
            <FormControlLabel
                control={<Checkbox />}
                label="Waitlisted"
            />
            <FormControlLabel
                control={<Checkbox />}
                label="Unmarked"
            />
        </Grid>
      <Grid container direction="column" justifyContent="space-between" sx={{mt:'1em'}}>
      <Typography variant="heading1" sx={{fontSize:'1.3em'}}>Applicant 1</Typography>
      <Divider />
      <Typography variant="heading1"sx={{fontSize:'1.3em'}}>Applicant 2</Typography>
      <Divider />
      <Typography variant="heading1"sx={{fontSize:'1.3em'}}>Applicant 3</Typography>
      <Divider />
      </Grid>
      </Grid>
  )
}

export default ApplicantList
