import { AppBar,Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import theme from '../theme';

const NavBar = () => {
  return (
    <AppBar color='default' sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        height: '57px',
        pt: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        px: 5,
        [theme.breakpoints.down('sm')]: {
          px: 1,
        },

        
    }}>
        <Button to="/" sx={{
            textDecoration: 'none',
            color: 'primary',
            fontWeight: 600,
            fontSize: '1.8rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
          },

            
        }}>WorkAble</Button>
        <Box  rowGap={'10px'} >
         <Button variant='outlined' size='small' sx={{
          py: -1,
          height: '2rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '0.8rem',
            height: '1.5rem',
          },
         }}>
          Log in
         </Button>
         <Button variant='contained' size='small' sx={{
          py: -1,
          ml: 4,
          [theme.breakpoints.down('sm')]: {
            ml: 1,
            fontSize: '0.8rem',
            height: '1.45rem',
          },
          height: '2rem',
         }}>
         Sign up
         </Button>
        
        </Box> 
    </AppBar>
  )
}

export default NavBar