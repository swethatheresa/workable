import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { 
  Button, 
  Typography, 
  Link, 
  CircularProgress, 
  FormControl, 
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import theme from '../theme';
import { fetchApplicant, changeStatus } from '../services/Applicants';

const Applicant = () => {
  const [applicant, setApplicant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status,setStatus] = useState('');

  useEffect(() => {
    setLoading(true);
    fetchApplicant('ZLGMUmrp5fnD7LnWPFdF').then((res) => {
      setApplicant(res);
      setLoading(false);
    });
  }, []);

  if (loading || !applicant) {
    return (
        <Grid container alignItems={'center'} justifyContent={'center'} height={'50%'} width={'50%'}>
          <CircularProgress size={40}/>
        </Grid>
    )
  }

  return (
    <Grid
      container
      spacing={3}
      direction="column"
      wrap="wrap"
      sx={{
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
        borderRadius: '9px',
        m: '1.5em',
        p: '2rem',
        width: '65vw',
        [theme.breakpoints.down('md')]: {
          width: '90vw',
          m: '1em',
          p: '1rem',
        },
      }}
    >
      <Grid container direction="row" justifyContent="space-between" alignItems="center">
        <Typography variant="heading1" sx={{ fontWeight: 'bold' }}>
          {applicant.name}
        </Typography>
        <FormControl sx={{width:"200px"}}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              value={status}
              onChange={(e) => 
                {
                  setStatus(e.target.value);
                  changeStatus('ZLGMUmrp5fnD7LnWPFdF',e.target.value);
                }
              }>
              <MenuItem value={"Shortlist"}>ShortList</MenuItem>
              <MenuItem value={"Waitlist"}>WaitList</MenuItem>
              <MenuItem value={"Selected"}>Selected</MenuItem>
              <MenuItem value={"Not Selected"}>Not Selected</MenuItem>
            </Select>
          </FormControl>
      </Grid>
      <Typography variant="heading2">Applied on {applicant.appliedDate.toDate().toDateString()}</Typography>
      <Typography variant="heading1" sx={{ mt: '1em', fontWeight: 'bold', fontSize: '1.1em' }}>
        Contact Number
      </Typography>
      <Typography variant="heading2">{applicant.contactNumber}</Typography>
      <Typography variant="heading1" sx={{ fontWeight: 'bold', fontSize: '1.1em' }}>
        Email
      </Typography>
      <Typography variant="heading2">{applicant.email}</Typography>
      <Typography variant="heading1" sx={{ fontWeight: 'bold', fontSize: '1.1em' }}>
        Address
      </Typography>
      <Typography variant="heading2">{applicant.address}</Typography>
      <Typography variant="heading1" sx={{ mb: '-0.5em', fontWeight: 'bold', fontSize: '1.1em' }}>
        Disability
      </Typography>
      <Grid
        container
        xs={12}
        sx={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {applicant.disabilityCategory && Array.isArray(applicant.disabilityCategory) && applicant.disabilityCategory.map((disability, index) => (
          <Typography
            key={index}
            sx={{
              backgroundColor: 'secondary.main',
              pl: '1rem',
              pr: '1rem',
              pt: '0.3rem',
              pb: '0.3rem',
              mr: '1rem',
              mt: '1rem',
              fontWeight: 'medium',
              borderRadius: '5px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
              },
            }}
          >
            {disability}
          </Typography>
        ))}
      </Grid>
      <Typography variant="heading1" sx={{ mt: '1rem', fontWeight: 'bold', fontSize: '1.1em' }}>
        Qualification Level
      </Typography>
      <Typography variant="heading2">{applicant.qualification}</Typography>
      <Typography variant="heading1" sx={{ fontWeight: 'bold', fontSize: '1.1em' }}>
        Experience Level
      </Typography>
      <Typography variant="heading2">{applicant.experience}</Typography>
      <Typography variant="heading1" sx={{ fontWeight: 'bold', fontSize: '1.1em' }}>
        Resume Link
      </Typography>
      <Link rel="noopener noreferrer" href={applicant.resumeLink} target="_blank">
      <Typography variant="heading2">{applicant.resumeLink}</Typography>
      </Link>
    </Grid>
  );
};

export default Applicant;
