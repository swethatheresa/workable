import React,{useEffect,useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2'; 
import { RadioGroup, Radio, FormControlLabel, Typography } from '@mui/material';
import theme from '../theme';
import Divider from '@mui/material/Divider';
import {getCountOfApplicants,fetchApplicants, fetchApplicantsByStatus} from '../services/Applicants';

const ApplicantList = (data) => {
    const [count,setCount] = useState(0);
    const [applicants, setApplicants] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        getCountOfApplicants('Cmmm4zvXxrFt74x1CtdQ').then((res) => {
            setCount(res);
        });
        fetchApplicants('Cmmm4zvXxrFt74x1CtdQ').then((res) => {
            setApplicants(res);
        });
    }, []);
    useEffect(() => {
        if (applicants) {
            setLoading(false);
        }
    }, [applicants]);

    return (
    <Grid container flexDirection={'column'} overflow={'auto'}
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
            {`${count} Applicants`}
        </Typography>
        <Grid container spacing={2} direction="row" justifyContent="space-between" wrap="wrap" sx={{mt:'1em'}}>
        <RadioGroup
            row
            aria-label="status"
            name="status"
            value={data.status}
            onChange={(e) => {
                const selectedStatus = e.target.value;
                if (selectedStatus === 'Unmarked')
                {
                    fetchApplicants('Cmmm4zvXxrFt74x1CtdQ').then((res) => {
                        setApplicants(res);
                    });
                }
                else
                {
                    fetchApplicantsByStatus('Cmmm4zvXxrFt74x1CtdQ',selectedStatus).then((res) => {
                        setApplicants(res);
                    });
                }

            }}
        >
            <FormControlLabel value="Selected" control={<Radio />} label="Selected" />
            <FormControlLabel value="Not Selected" control={<Radio />} label="Not Selected" />
            <FormControlLabel value="Shortlist" control={<Radio />} label="Shortlisted" />
            <FormControlLabel value="Waitlist" control={<Radio />} label="Waitlisted" />
            <FormControlLabel value="Unmarked" control={<Radio />} label="Unmarked" />
        </RadioGroup>
        </Grid>
      <Grid container spacing={2} direction="column" justifyContent="space-between" sx={{mt:'1em'}}>
       {applicants && applicants.map((applicant, index) => (
            <React.Fragment key={index}>
                <Typography variant="heading1" sx={{ fontSize: '1.3em', cursor:'pointer' }}>{applicant.name}</Typography>
                <Divider />
            </React.Fragment>
        ))}
      </Grid>
      </Grid>
  )
}

export default ApplicantList
