import { AppBar, Box, Button } from '@mui/material';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import theme from '../theme';
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { user, logoutUser } = UserAuth();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };


  return (
    <AppBar
      color="default"
      sx={{
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
      }}
    >
      <Button
        component={Link}
        to="/"
        sx={{
          textDecoration: 'none',
          color: 'primary',
          fontWeight: 600,
          fontSize: '1.8rem',
          [theme.breakpoints.down('sm')]: {
            fontSize: '1.2rem',
          },
        }}
      >
        WorkAble
      </Button>
      <Box rowGap={'10px'}>
        {user ? (
          <>
            <Button
              component={Link}
              to="/"
              variant="outlined"
              size="small"
              aria-label='home'
              sx={{
                py: -1,
                height: '2rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.8rem',
                  height: '1.5rem',
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/myjobs"
              variant="outlined"
              size="small"
              aria-label='my-jobs'
              sx={{
                py: -1,
                height: '2rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.8rem',
                  height: '1.5rem',
                },
              }}
            >
              My Jobs
            </Button>
            <Button
              variant="outlined"
              size="small"
              onClick={handleLogout}
              sx={{
                py: -1,
                ml: 4,
                [theme.breakpoints.down('sm')]: {
                  ml: 1,
                  fontSize: '0.8rem',
                  height: '1.45rem',
                },
                height: '2rem',
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              size="small"
              // onClick={handleLogin}
              sx={{
                py: -1,
                height: '2rem',
                [theme.breakpoints.down('sm')]: {
                  fontSize: '0.8rem',
                  height: '1.5rem',
                },
              }}
            >
              Log in
            </Button>
          </>
        )}
      </Box>
    </AppBar>
  );
};

export default NavBar;
