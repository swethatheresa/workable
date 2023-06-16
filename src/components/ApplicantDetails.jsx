import React, { useState } from 'react';
import Applicant from './Applicant';
import ApplicantList from './ApplicantList';
import Grid from '@mui/material/Unstable_Grid2';
import { useMediaQuery, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { useParams } from 'react-router-dom';

const ApplicantDetails = () => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [showApplicantList, setShowApplicantList] = useState(false);
  const { id1 , id2 } = useParams();
  const handleOpenApplicantList = () => {
    setShowApplicantList(true);
  };

  const handleCloseApplicantList = () => {
    setShowApplicantList(false);
  };

  return (
    <Grid container flexDirection={isMediumScreen ?'column':'row'} justifyContent={'space-between'} wrap="nowrap" sx={{mt:'5em'}}>
        <Applicant applicantid={id2} jobid={id1}/>
      {isMediumScreen ? (
        <Grid container>
          <Button variant="contained" onClick={handleOpenApplicantList} sx={{ml:'1em', mb:'1.5em'}}>
            Open Applicant List
          </Button>
          <Dialog open={showApplicantList} onClose={handleCloseApplicantList} p={3} maxWidth="md" fullWidth>
            <DialogTitle>Applicant List</DialogTitle>
            <DialogContent>
              <ApplicantList jobid={id1}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseApplicantList}>Close</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      ) : (
          <ApplicantList jobid={id1}/>
      )}
    </Grid>
  );
}

export default ApplicantDetails;
