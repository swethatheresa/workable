import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../theme';
import {shadows } from '@mui/system';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';


const EmployerLogin = () => {
  return (
    <Grid container>
        <Grid item md={8} height={100} sx={
            {
      
                backgroundColor: '-moz-initial',
           
            }
        }>
         </Grid>

        <Grid container height={'100vh'} flexDirection={'column'} xs={12} md={4} sx={

        {  
            boxShadow: 20,
        }} >
            <Typography variant="h3" mt={6} ml={4} fontSize={45} fontWeight={600} color={theme.typography.green} >WorkAble</Typography>
            <Typography variant="h4" mt={10} ml={4} fontSize={25} fontWeight={600} color={theme.typography.heading1} >Login</Typography>
            <TextField id='email' label='Email' variant='outlined' size='small' sx={{
                
                mt: 5,
                mx: 4,
              
       }}/>
       <TextField id='password' label='Password' type='password' variant='outlined' size='small' sx={{
                
                mt: 2.5,
                mx: 4,
              
       }}/>
         <Button variant='contained' size='small' sx={{
                mt: 3,
                mx: 4,
                fontWeight: 500,
                backgroundColor: theme.palette.primary.darker,
         }}>Log In</Button>
         <Button variant='outlined' size='small' sx={{
                mt: 3,
                mx: 4,
                borderColor: '#afafaf',
                color: '#2f2f2f',
                fontWeight: 500,
               '&:hover': {
                   backgroundColor: '#efefef',
                   borderColor: '#afafaf',
               }
         }}>Sign in with google</Button>

         <Typography variant="h3" mt={6} textAlign={'center'} fontSize={18} fontWeight={400} >Don't have an account?<span style={{ color:theme.palette.primary.darker , fontWeight:500, cursor:'pointer' }}> Sign Up </span> </Typography>
           

        </Grid>
        
    </Grid>
  )
}

export default EmployerLogin