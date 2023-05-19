import React from 'react'
import Grid from '@mui/material/Unstable_Grid2'; 
import { Button, Typography } from '@mui/material';
import theme from '../theme';


const Applicant = () => {
  return (
    <Grid container spacing={3} direction={'column'} wrap={'wrap'}
        sx={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '9px',
            m : '1.5em',
            p: '2rem',
            width: '65vw',
            [theme.breakpoints.down('md')]: {
                width: '90vw',
                m : '1em',
                p: '1rem',
            },
        }}
      >
        <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant='heading1' sx={{ fontWeight:'bold'}} >
                Charlie Keaton
            </Typography>
            <Button variant='contained' sx={{ fontSize: '1em',width:'8em',borderRadius:'10px'}}>
                Shortlist
            </Button>
        </Grid>
        <Typography variant='heading1' 
            sx={{ 
                mt: '1em',
                fontWeight:'bold', 
                fontSize: '1.1em'
            }} >
            Contact Number
        </Typography>
        <Typography variant='heading2' >
            123-456-7890
        </Typography>
        <Typography variant='heading1' sx={{ fontWeight:'bold', fontSize: '1.1em'}} >
            Email
        </Typography>
        <Typography variant='heading2' >
            charlie@gmail.com
        </Typography>
        <Typography variant='heading1'  sx={{ fontWeight:'bold', fontSize: '1.1em'}} >
            Address
        </Typography>
        <Typography variant='heading2' >
            1234 Main Street, Anytown, USA
        </Typography>
        <Typography variant='heading1' sx={{ mb: '-0.5em',fontWeight:'bold', fontSize: '1.1em'}} >
            Disability
        </Typography>
        <Grid container xs={12}  sx={{
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <Typography sx={{
                    backgroundColor: 'secondary.main',
                    pl: '1rem',
                    pr: '1rem',
                    pt: '0.3rem',
                    pb: '0.3rem',
                    mr: '1rem',
                    mt: '1rem',
                    borderRadius: '5px',
                    fontWeight: 'medium',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}>
                    Hearing Impairment
                </Typography>
                <Typography sx={{
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
                }}>
                    Speech Impairment
                </Typography>
                <Typography sx={{
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
                }}>
                    Learning Disability
                </Typography>
        </Grid>  
        <Typography variant='heading1' sx={{ mt:'1rem',fontWeight:'bold', fontSize: '1.1em'}} >
            Qualification Level
        </Typography>
        <Typography variant='heading2' >
            Bachelor's Degree
        </Typography>
        <Typography variant='heading1' sx={{ fontWeight:'bold', fontSize: '1.1em'}} >
            Experience Level
        </Typography>
        <Typography variant='heading2' >
            2 years
        </Typography>
        <Typography variant='heading1' sx={{ fontWeight:'bold', fontSize: '1.1em'}} >
            Cover Letter
        </Typography>
        <Typography variant='heading2' >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Typography>
    </Grid>
        
  )
}

export default Applicant
