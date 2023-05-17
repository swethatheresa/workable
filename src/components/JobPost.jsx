import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Button, Typography } from '@mui/material';
import { Avatar } from '@mui/material';
import  companyLogo  from '../assets/companyLogo.png';
import theme from '../theme';
import NavBar from './NavBar';

function JobPost() {
  return (
      <Grid container spacing={3}
        sx={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '9px',
            mt: '9rem',
            ml: '2rem',
            mr: '2rem',
            mb: '3rem',
            p: '2rem',
            [theme.breakpoints.down('sm')]: {
                pl: '0rem',
                pr: '0rem',
            }
        }}
      >
        <NavBar/>  
        
        <Grid item >
        <Avatar variant="square" alt="Company Logo" src={companyLogo} xs={6}
            sx={{
                width: '9rem',
                height: '9rem',
                mt: '1rem',
                ml: '2rem',
                [theme.breakpoints.down('sm')]: {
                    width: '6rem',
                    height: '6rem',
                    mt: '0.5rem',
                    ml: '1rem',
                  },
                [theme.breakpoints.down('xs')]: {
                    width: '4rem',
                    height: '4rem',
                    mt: '0.5rem',
                    ml: '0.5rem',
                    },
            }}
        />
        </Grid>
        <Grid container lg={8} sm={6} 
            sx={{
                mt: '1.5rem',
                flexDirection: 'column',
                [theme.breakpoints.down('sm')]: {   
                    mt: '1rem',
                },
                
            }}
        >
            <Typography lg={12}variant="heading2"
                sx={{
                    fontSize: '1.3srem',
                    fontWeight: '600',
                    [theme.breakpoints.down('md')]: {
                        fontSize: '1rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.9rem',
                    },
                    [theme.breakpoints.down('xs')]: {
                        fontSize: '0.7rem',
                    },
                }}
            >
                ELITE LIMITED
            </Typography>
            <Typography lg={12} variant="heading1" 
                sx={{ 
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    [theme.breakpoints.down('md')]: {
                        fontSize: '1.5rem',
                    },
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '1.3rem',
                    },
                    [theme.breakpoints.down('xs')]: {
                        fontSize: '1.2rem',
                    },
                }}
            >
                Figma Designer
            </Typography>
        </Grid>
        <Button variant="contained" sx={{
            mt: '2rem',
            ml: '2rem',
            fontSize: '1rem',
            height: '2.5rem',
            width: '6rem',
            boxShadow: 'none',
            borderRadius: '10px',
            [theme.breakpoints.down('md')]: {
                fontSize: '0.9rem',
                mt : '-4.4rem',
                ml: '12.5rem',
                height: '2rem',
                width: '5rem',
                borderRadius: '5px',
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.7rem',
                mt : '-2.4rem',
                ml: '8.5rem',
                height: '1.6rem',
                width: '5rem',
                borderRadius: '5px',
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.7rem',
                mt : '-1rem',
                ml: '6rem',
                height: '1.4rem',
                width: '4rem',
            },
            

        }} >
            Apply
        </Button>
        <Grid container lg={12} sm={12} spacing={3}
            sx={{
                ml: '2.5rem',
                mr: '2.5rem',
                mt: '1rem',
                flexDirection: 'column',
                [theme.breakpoints.down('sm')]: {
                    ml: '1.1rem',
                },
            }}
        >
            <Typography lg={12} variant="heading2" 
            sx={{
                [theme.breakpoints.down('sm')]: {
                    fontSize: '0.8rem',
                },
            }}> Posted on 15th March 2021  • 39 Applicants • 10 Openings </Typography>
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Job Description</Typography>
            <Typography lg={12} variant="heading2" 
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
            book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Disability Categories</Typography>
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
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Job Location</Typography>
            <Typography lg={12} variant="heading2" 
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}
            >
                Kochi, Kerala, India
            </Typography>
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Experience Level</Typography>
            <Typography lg={12} variant="heading2" 
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}
            >
            2-3 years
            </Typography>
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Qualification Level</Typography>
            <Typography lg={12} variant="heading2" 
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}
            >
            Bachelors Degree
            </Typography>
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Roles and Responsibilities</Typography>
            <Typography lg={12} variant="heading2" 
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}
            >
            Develop and maintain AI chatbot applications using Python and related frameworks.
            Design and implement efficient algorithms and data structures to support chatbot functionality, including natural language understanding and generation.
            Collaborate with cross-functional teams, including UX/UI designers, data scientists, and backend engineers, to define and implement chatbot features and enhancements.
            Integrate chatbot solutions with external APIs and third-party services to enhance functionality and extend capabilities.
            Optimize chatbot performance through code refactoring, performance tuning, and system architecture improvements.
            </Typography>
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Salary</Typography>
            <Typography lg={12} variant="heading2" 
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}
            >
            INR 3,00,000 - 4,00,000 PA.
            </Typography>
            <Typography lg={12} variant="heading1" sx={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
                mt: '1rem',
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1rem',
                },
            }}>Additional Information</Typography>
            <Typography lg={12} variant="heading2" 
                sx={{
                    [theme.breakpoints.down('sm')]: {
                        fontSize: '0.8rem',
                    },
                }}
            >
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
            type and scrambled it to make a type specimen book. It has survived not only five centuries, but also 
            the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 
            1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently 
            with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
        </Grid>
      </Grid>



  )
}

export default JobPost
