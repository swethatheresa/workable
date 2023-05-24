import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import theme from '../theme';
import {shadows } from '@mui/system';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';
import { useState } from 'react';
import {  UserAuth } from '../context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';


const EmployerLogin = () => {
    const [login, setLogin] = useState(true);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const {createUser,loginUser,checkLogin,loginGoogle} = UserAuth();

    const handleSignup = async(e) => {
        e.preventDefault();
        console.log(email);
        try{
           await createUser(email,password);
        }catch(err){
            console.log(err.code);
        }


    }
    const handleLogin=async(e)=>{
        e.preventDefault();
        try{
            await loginUser(email,password);
        }catch(err){
            console.log(err.code);
        }
    }
    const handleGoogle = async(e) => {
        e.preventDefault();
        try{
            await loginGoogle();
        }catch(err){
            console.log(err.code);
        }
    }
  return (
    <Grid container overflow={'auto'} >
        <Grid item md={8} height={'100vh'} sx={
            {
      
                backgroundColor: '-moz-initial',
           
            }
        }>
         </Grid>

        <Grid container height={'100vh'} flexWrap={'nowrap'} flexDirection={'column'}  overflow={'auto'} xs={12} md={4} sx={
            
        {  
            boxShadow: 20,
            maxWidth: '100%',
        }} >
            <Typography variant="h3" mt={6} ml={4} fontSize={45} fontWeight={600} color={theme.typography.green} >WorkAble</Typography>
            {login?
            <form onSubmit={handleLogin} style={{display:'flex',flexDirection:'column'}}> 
                <Typography variant="h4" mt={10} ml={4} fontSize={25} fontWeight={600} color={theme.typography.heading1} >Login</Typography>
                    <TextField id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  label='Email' variant='outlined' size='small' sx={{
                        
                        mt: 5,
                        mx: 4,
                    
            }}/>
            <TextField id='password' label='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}} type='password' variant='outlined' size='small' sx={{
                        
                        mt: 2.5,
                        mx: 4,
                    
            }}/>
                <Button variant='contained' type='submit' size='small' sx={{
                        mt: 3,
                        mx: 4,
                        fontWeight: 500,
                        backgroundColor: theme.palette.primary.darker,
                }}>Log In</Button>
            </form>:<form onSubmit={handleSignup} style={{display:'flex',flexDirection:'column'}}> <Typography variant="h4" mt={10} ml={4} fontSize={25} fontWeight={600} color={theme.typography.heading1} >Sign Up</Typography>
                    <TextField id='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}  label='Email' variant='outlined' size='small' sx={{
                        
                        mt: 5,
                        mx: 4,
                    
            }}/>
            <TextField id='password' label='Password' type='password' value={password} onChange={(e)=>{setPassword(e.target.value)}} variant='outlined' size='small' sx={{
                        
                        mt: 2.5,
                        mx: 4,
                    
            }}/>
                <Button variant='contained' type='submit' size='small' sx={{
                        mt: 3,
                        mx: 4,
                        fontWeight: 500,
                        backgroundColor: theme.palette.primary.darker,
                }}>Sign Up</Button>
            </form>}
         <Button variant='outlined' size='small' onClick={handleGoogle} sx={{
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

        { login?<Typography variant="body2" mt={6} textAlign={'center'} fontSize={18} fontWeight={400} >Don't have an account?<span style={{ color:theme.palette.primary.darker , fontWeight:500, cursor:'pointer', wordWrap:'break-word',maxWidth:'full' }} onClick={()=>{setLogin(!login)}}> Sign Up </span> </Typography>:
        <Typography variant="body2" mt={6} textAlign={'center'} fontSize={18} fontWeight={400} >Already have an account?<span style={{ color:theme.palette.primary.darker , fontWeight:500, cursor:'pointer', wordWrap:'break-word',maxWidth:'full' }} onClick={()=>{setLogin(!login)}}> Log In </span> </Typography>}
           

        </Grid>
        
    </Grid>
  )
}

export default EmployerLogin