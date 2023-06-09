import React,{useEffect,useState} from 'react'
import Grid from '@mui/material/Unstable_Grid2'; 
import { RadioGroup, Radio, FormControlLabel, Typography } from '@mui/material';
import theme from '../theme';
import Divider from '@mui/material/Divider';
import {getCountOfApplicants,fetchApplicants, fetchApplicantsByStatus} from '../services/Applicants';
import { useNavigate } from 'react-router';

const ApplicantList = (data) => {
    const [count,setCount] = useState(0);
    const [applicants, setApplicants] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleApplicant = (applicantid) => {
        navigate(`/applicantdetails/${data.jobid}/${applicantid}`);
      };

    useEffect(() => {
        setLoading(true);
        getCountOfApplicants(data.jobid).then((res) => {
            setCount(res);
        });
        fetchApplicants(data.jobid).then((res) => {
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
                if (selectedStatus === 'All')
                {
                    fetchApplicants(data.jobid).then((res) => {
                        setApplicants(res);
                    });
                }
                else
                {
                    fetchApplicantsByStatus(data.jobid,selectedStatus).then((res) => {
                        setApplicants(res);
                    });
                }

            }}
        >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Selected" control={<Radio />} label="Selected" />
            <FormControlLabel value="Not Selected" control={<Radio />} label="Not Selected" />
            <FormControlLabel value="Shortlist" control={<Radio />} label="Shortlisted" />
            <FormControlLabel value="Waitlist" control={<Radio />} label="Waitlisted" />
            <FormControlLabel value="Applied" control={<Radio />} label="Unmarked" />
        </RadioGroup>
        </Grid>
      <Grid container spacing={2} direction="column" justifyContent="space-between" sx={{mt:'1em'}}>
       {applicants && applicants.map((applicant, index) => (
            <React.Fragment key={index}>
                <Typography variant="heading1" sx={{ fontSize: '1.3em', cursor:'pointer' }} onClick={()=>handleApplicant(applicant.id)}>{applicant.name}</Typography>
                <Divider />
            </React.Fragment>
        ))}
      </Grid>
      </Grid>
  )
}

export default ApplicantList
