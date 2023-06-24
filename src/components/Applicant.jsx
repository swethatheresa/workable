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
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import theme from '../theme';
import { fetchApplicant, changeStatus } from '../services/Applicants';
import { useNavigate } from 'react-router-dom';
import {sendEmail,sendEmailReject} from '../services/Mail';
import { UserAuth } from '../context/AuthContext';


const Applicant = (data) => {
  const [applicant, setApplicant] = useState(null);
  const [loading, setLoading] = useState(false);
  const [status,setStatus] = useState('');
  const [previousStatus, setPreviousStatus] = useState('')
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const {user} = UserAuth();
  const route = useNavigate();

  const handleStatusChange = (newStatus) => {
    setPreviousStatus(status);
    setStatus(newStatus);
    setOpenConfirmation(true);
  };
  const handleConfirmStatusChange = () => {
    changeStatus(data.applicantid, status);
    if(status === "Selected")
      {
        sendEmail(applicant.email,'sde',user.displayName)
        console.log("Email sent", applicant.email)
      }
      else if(status === "Not Selected")
      {
        sendEmailReject(applicant.email,'sde',user.displayName)
        console.log("Email sent", applicant.email)
      }
        
    setOpenConfirmation(false);
  };

  const handleCloseConfirmation = () => {
    setStatus(previousStatus);
    setOpenConfirmation(false);
  };

  useEffect(() => {
    setLoading(true);
    fetchApplicant(data.applicantid).then((res) => {
      setApplicant(res);
      if(res.status !== "Applied")
      {
        setStatus(res.status);
      }
      else
      {
        setStatus("");
      }
      setLoading(false);
    });
  }, [route]);

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
                  handleStatusChange(e.target.value);
                }
              }>
              <MenuItem value={"Shortlist"}>ShortList</MenuItem>
              <MenuItem value={"Waitlist"}>WaitList</MenuItem>
              <MenuItem value={"Selected"}>Selected</MenuItem>
              <MenuItem value={"Not Selected"}>Not Selected</MenuItem>
            </Select>
          </FormControl>
      </Grid>
      <Typography variant="heading2">Applied on {applicant.applied_date.toDate().toDateString()}</Typography>
      <Typography variant="heading1" sx={{ mt: '1em', fontWeight: 'bold', fontSize: '1.1em' }}>
        Contact Number
      </Typography>
      <Typography variant="heading2">{applicant.contactNumber}</Typography>
      <Typography variant="heading1" sx={{ fontWeight: 'bold', fontSize: '1.1em' }}>
        Date of Birth
      </Typography>
      <Typography variant="heading2">{applicant.dob}</Typography>
      <Typography variant="heading1" sx={{fontWeight: 'bold', fontSize: '1.1em' }}>
        Gender
      </Typography>
      <Typography variant="heading2">{applicant.gender}</Typography>
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
      {applicant.coverLetter && (
        <>
          <Typography variant="heading1" sx={{ fontWeight: 'bold', fontSize: '1.1em' }}>
            Cover Letter
          </Typography>
          <Typography variant="heading2">{applicant.coverLetter}</Typography>
        </>
      )}

      {/* Confirmation Dialog */}
      <Dialog open={openConfirmation} onClose={handleCloseConfirmation}>
        <DialogTitle fontWeight={'bold'}>Confirm Status Change</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Are you sure you want to change the applicant status?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseConfirmation} color="error">Cancel</Button>
          <Button onClick={handleConfirmStatusChange} >
            Change
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Applicant;
