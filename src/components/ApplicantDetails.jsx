import React, { useState } from 'react';
import Applicant from './Applicant';
import ApplicantList from './ApplicantList';
import Grid from '@mui/material/Unstable_Grid2';
import { useMediaQuery, Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

const ApplicantDetails = () => {
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down('md'));

  const [showApplicantList, setShowApplicantList] = useState(false);

  const handleOpenApplicantList = () => {
    setShowApplicantList(true);
  };

  const handleCloseApplicantList = () => {
    setShowApplicantList(false);
  };

  return (
    <Grid container flexDirection={isMediumScreen ?'column':'row'} justifyContent={'space-between'} wrap="nowrap" sx={{mt:'5em'}}>
        <Applicant />
      {isMediumScreen ? (
        <Grid container>
          <Button variant="contained" onClick={handleOpenApplicantList} sx={{ml:'1em', mb:'1.5em'}}>
            Open Applicant List
          </Button>
          <Dialog open={showApplicantList} onClose={handleCloseApplicantList} maxWidth="md" fullWidth>
            <DialogTitle>Applicant List</DialogTitle>
            <DialogContent>
              <ApplicantList />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseApplicantList}>Close</Button>
            </DialogActions>
          </Dialog>
        </Grid>
      ) : (
          <ApplicantList />
      )}
    </Grid>
  );
}

export default ApplicantDetails;
