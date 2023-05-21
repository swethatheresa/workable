import React from 'react';
import { Card, CardContent, Typography, Grid, Chip, Box, Avatar, useTheme } from '@mui/material';
import rocket from '../assets/Rocket.png'

const CardExample = (props) => {
  const theme = useTheme();

  return (
    <Card sx={{ height:'fit-content', width: 300,padding:1 ,borderRadius:4 ,margin:1}}>
      <CardContent>
        <Grid container alignItems="center" justifyContent="flex-start" marginBottom={2}>


          <Grid item>
            <Avatar
              alt="Logo"
              src={props.img}
              sx={{ width: 40, height: 40 }}
            />
          </Grid>



          <Grid item marginLeft={3}>
            <Typography variant="subtitle1" fontWeight="bold">
              {props.position}
            </Typography>
            <Typography variant="body2">
              Posted {props.days} days ago
            </Typography>
          </Grid>


        </Grid>

        <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100px' }}>
              <Chip
                label={props.location}
                sx={{
                  marginRight: "0.5rem",
                  backgroundColor: "#CAFFCF",
                  borderRadius: 3,
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
                label={`${props.years}+ years exp`}
                sx={{
                  marginRight: "0.5rem",
                  backgroundColor: "#CAFFCF",
                  borderRadius: 3,
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
          <Grid item flexDirection={'row'} display={'flex'} justifyContent="center" alignItems={'center'}>
          <Typography variant="h4">
                {props.applicants}
              </Typography>
            <Typography variant="body2" marginLeft={0.5}>

              applicants
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{props.lastweek} in last week</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CardExample;
