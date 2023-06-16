import { 
  AppBar,
  Button,
  Drawer,
  List,
  Box,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  useMediaQuery,
 } from '@mui/material'
import React , { useState } from 'react'
import { Link } from 'react-router-dom'
import theme from '../theme';
import { UserAuth } from '../context/AuthContext';
import { useNavigate,useLocation } from 'react-router-dom';
import { Menu,Logout, Person, PostAdd, ViewList } from '@mui/icons-material';

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const router = useLocation();
  const {user,logoutUser} = UserAuth();
  const isActive = (pathname) => {
    return location.pathname === pathname;
  }
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
  (!isActive('/login') && !isActive('/')) &&  isMediumScreen ?
  <>
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

        
    }}> <Box rowGap={'10px'} >
            <Button component={Link} to='/postings' sx={{
                color: 'primary',
               
                fontWeight: 600,
                height: '2rem',
                fontSize: '1.8rem',
              [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
              },

                
            }}>WorkAble</Button>
            <Button component={Link} to='/postings' sx={{marginLeft:'40px',
            height: '2rem', 
            borderRadius: 0,
            borderBottom: isActive('/postings')&& '3px solid #3AAE45',
            fontSize: '1.2rem',
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.9rem',
            },
                }}>View Postings</Button>
            <Button component={Link} to='/jobform' sx={{marginLeft:'40px',
            height: '2rem', 
            borderRadius: 0,
            borderBottom: isActive('/jobform')&& '3px solid #3AAE45',
            fontSize: '1.2rem',
            [theme.breakpoints.down('sm')]: {
              fontSize: '0.9rem',
            },
                }}>Add Posting</Button>
        </Box>
       <Box> 
       <Button variant='outlined' size='small' sx={{
              py: -1,
              height: '2rem',
              marginRight:'40px',
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
                height: '1.5rem',
                marginRight:'40px'
              },
            }}>
              Edit Profile
            </Button>
          <Button onClick={()=>{logoutUser()}}variant='outlined' size='small' sx={{
              py: -1,
              height: '2rem',
              [theme.breakpoints.down('sm')]: {
                fontSize: '0.8rem',
                height: '1.5rem',
              },
            }}>
              Log Out
            </Button>
         </Box>
    </AppBar>
  </>
  :
  <>
      {/* Responsive Drawer Navbar */}
      <AppBar position="static"
              color='default'
              sx={{
                display: { md: 'none' }
              }}
      >
          <Button
            onClick={toggleDrawer}
            sx={{
              color: 'primary',
              fontWeight: 600,
              fontSize: '1.8rem',
              justifyContent: 'flex-start',
              ml:'10px',
            }}
          >
            <Menu sx={{mr:'10px'}}/>
            WorkAble
          </Button>
      </AppBar>

      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 200 }}>
          <ListItemButton
            component={Link}
            to="/postings"
            sx={{
              backgroundColor: isActive('/postings') ? '#CAFFCF' : 'transparent',
            }}
          >
            <ListItemIcon>
              <ViewList />
            </ListItemIcon>
            <ListItemText primary="View Postings" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/jobform"
            sx={{
              backgroundColor: isActive('/jobform') ? '#CAFFCF' : 'transparent',
            }}
          >
            <ListItemIcon>
              <PostAdd />
            </ListItemIcon>
            <ListItemText primary="Add Posting" />
          </ListItemButton>
          <ListItemButton
            component={Link}
            to="/profile"
            sx={{
              backgroundColor: isActive('/profile') ? '#CAFFCF' : 'transparent',
            }}
          >
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Edit Profile" />
          </ListItemButton>
          <ListItemButton onClick={logoutUser}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </List>
      </Drawer>
    </>
  )
}

export default NavBar