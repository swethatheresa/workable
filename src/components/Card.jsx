import React, {useEffect, useState} from 'react';
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Chip,
  Box,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {Edit as EditIcon} from '@mui/icons-material';
import {Delete as DeleteIcon} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { deleteJobDetails } from '../services/JobDetails';
import { getCountOfApplicants } from '../services/Applicants';

const CardExample = (props) => {
  const theme = useTheme();
  const [openConfirmation, setOpenConfirmation] = useState(false);
  const [countOfApplicants, setCountOfApplicants] = useState(0);

  useEffect(() => {
    getCountOfApplicants(props.id).then((res) => {
      setCountOfApplicants(res);
    });
  }, []);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteJobDetails(props.id); 
    props.removeDeletedItem(props.id); 
    setOpenConfirmation(false);
  };

  const handleEdit =() => {
    
    navigate(`/editposting/${props.id}`)

  };
  const handleViewPosting =() => {
    navigate(`/candidatetable/${props.id}`)
  };
  return (
    <Card sx={{  height:'fit-content', width: 350,padding:1 ,borderRadius:4 ,margin:1 ,'&:hover': {
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      transform: 'translateY(-4px)',
    } }}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="flex-start" marginBottom={2}>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="bold" sx={{cursor:'pointer'}} onClick={()=>handleViewPosting()}>
              {props.JobTitle}
            </Typography>
            <Typography variant="body2">
              Posted on {props.posted_date} 
            </Typography>
          </Grid>
          <EditIcon onClick={()=>{handleEdit()}} sx={{marginTop:-2, marginLeft:'auto',marginRight:'15px',cursor:'pointer'}}/>
          <DeleteIcon onClick={() => setOpenConfirmation(true)} sx={{marginTop:-2,cursor:'pointer'}}/>
        </Grid>

        <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '150px' }}>
              <Chip
                label={props.JobLocation}
                sx={{
                  marginRight: "0.5rem",
                  backgroundColor: "#CAFFCF",
                  borderRadius: 3,
                  pt: "1em",
                  pb: "1em",
                  [theme.breakpoints.down("md")]: {
                    height: "1rem",
                    fontSize: "0.9rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: "0.9rem",
                    fontSize: "0.7rem",
                    marginLeft: "0.6rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "0.7rem",
                    fontSize: "0.6rem",
                    marginLeft: "0rem",
                  },

                }}
              />

              <Chip
                label={`${props.experience} exp`}
                sx={{
                  marginRight: "0.5rem",
                  backgroundColor: "#CAFFCF",
                  borderRadius: 3,
                  pt: "1em",
                  pb: "1em",
                  [theme.breakpoints.down("md")]: {
                    height: "1rem",
                    fontSize: "0.9rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: "0.9rem",
                    fontSize: "0.7rem",
                    marginLeft: "0.6rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "0.7rem",
                    fontSize: "0.6rem",
                    marginLeft: "0rem",
                  },

                }}
              />
              <Chip
                label={props.workMode}
                sx={{
                  marginRight: "0.5rem",
                  backgroundColor: "#CAFFCF",
                  borderRadius: 3,
                  pt: "1em",
                  pb: "1em",
                  [theme.breakpoints.down("md")]: {
                    height: "1rem",
                    fontSize: "0.9rem",
                  },
                  [theme.breakpoints.down("sm")]: {
                    height: "0.9rem",
                    fontSize: "0.7rem",
                    marginLeft: "0.6rem",
                  },
                  [theme.breakpoints.down("xs")]: {
                    height: "0.7rem",
                    fontSize: "0.6rem",
                    marginLeft: "0rem",
                  },

                }}
              />

            </Box>
          </Grid>
        </Grid>



        <Grid container justifyContent="space-between" alignItems={'center'} marginTop={2}>
          <Grid item flexDirection={'row'} display={'flex'} justifyContent="center" alignItems={'center'} sx={{cursor:'pointer'}} onClick={()=>handleViewPosting()}>
            <Typography variant="h4">
                {countOfApplicants}
              </Typography>
            <Typography variant="body2" marginLeft={0.5}>
              applicants
            </Typography>
          </Grid>
        </Grid>
        <Dialog open={openConfirmation} onClose={() => setOpenConfirmation(false)}>
          <DialogTitle fontWeight={'bold'}>Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography variant="body1">Are you sure you want to delete this item?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenConfirmation(false)}>Cancel</Button>
            <Button onClick={handleDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default CardExample;
