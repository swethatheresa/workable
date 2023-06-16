import React from 'react';
import { Card, CardContent, Typography, Grid, Chip, Box, useTheme } from '@mui/material';
import {Edit as EditIcon} from '@mui/icons-material';
import {Delete as DeleteIcon} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { deleteJobDetails } from '../services/JobDetails';

const CardExample = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteJobDetails(props.id); 
    props.removeDeletedItem(props.id); 
  };

  const handleEdit =() => {
    
    navigate(`/editposting/${props.id}`)

  };
  return (
    <Card sx={{  height:'fit-content', width: 350,padding:1 ,borderRadius:4 ,margin:1}}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="flex-start" marginBottom={2}>
          <Grid item>
            <Typography variant="subtitle1" fontWeight="bold">
              {props.JobTitle}
            </Typography>
            <Typography variant="body2">
              Posted on {props.posted_date} 
            </Typography>
          </Grid>
          <EditIcon onClick={()=>{handleEdit()}} sx={{marginTop:-2, marginLeft:'auto',cursor:'pointer'}}/>
          <DeleteIcon onClick={handleDelete} sx={{marginTop:-2,cursor:'pointer'}}/>
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
          <Grid item flexDirection={'row'} display={'flex'} justifyContent="center" alignItems={'center'} sx={{cursor:'pointer'}}>
            <Typography variant="h4">
                {props.numberofapplicants}
              </Typography>
            <Typography variant="body2" marginLeft={0.5}>
              applicants
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardExample;
