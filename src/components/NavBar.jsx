import { AppBar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <AppBar color='default' sx={{
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        height: '50px',
        pt: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    }}>
        <Link to="/" style={{
            textDecoration: 'none',
            color: '#2f2f2f',
            fontWeight: 500,
            fontSize: '1.2rem',
            
        }}>WorkAble</Link>
         <Link to="/" style={{
            color: '#2f2f2f',
            fontWeight: 600,
            fontSize: '1.5rem',
            
        }}>Home</Link>
    </AppBar>
  )
}

export default NavBar