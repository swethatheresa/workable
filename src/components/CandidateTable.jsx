import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import { Typography,Tab,Box } from '@mui/material';
import { TabContext } from '@mui/lab';
import theme from '../theme';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomTable from './CustomTable';

const CandidateTable = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const data = [
        { candidateName: 'Phoebe Buffay', applicationStatus: 'Rejected', appliedRole: 'UX Designer', applicationDate: '2023-05-05' },
        { candidateName: 'John Doe', applicationStatus: 'In Progress', appliedRole: 'Software Engineer', applicationDate: '2023-05-01' },
        { candidateName: 'Rachel Green', applicationStatus: 'Accepted', appliedRole: 'Data Analyst', applicationDate: '2023-04-28' },
        { candidateName: 'Monica Geller', applicationStatus: 'Rejected', appliedRole: 'UX Designer', applicationDate: '2023-05-05' },
        { candidateName: 'Chandler Bing', applicationStatus: 'In Progress', appliedRole: 'Software Engineer', applicationDate: '2023-05-01' },
    ];
    const data1 = [
        { candidateName: 'Chandler Bing', applicationStatus: 'In Progress', appliedRole: 'Software Engineer', applicationDate: '2023-05-01' },
        { candidateName: 'Ross Geller', applicationStatus: 'Accepted', appliedRole: 'Data Analyst', applicationDate: '2023-04-28' },    
        { candidateName: 'Joey Tribbiani', applicationStatus: 'In Progress', appliedRole: 'Software Engineer', applicationDate: '2023-05-01' }
    ];
  return (
    <Grid container flexDirection={'column'} 
    sx={{ 
            m: '3em',
            p: '2rem',
            [theme.breakpoints.down('md')]: {
                m: '1em',
                p: '1rem',
            },
     
    }}>
        <Typography variant="heading1" color={theme.palette.primary.darker}sx={{ fontWeight: 'bold'}}>Candidates</Typography>
        <Grid container flexDirection={'column'} 
        sx={{
            backgroundColor: '#FFFFFF',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.05)',
            borderRadius: '9px',
            p: '2rem',
            mt: '2rem',
        }}
       >
        <TabContext value={value} flexDirection={'column'}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="Application status of candidates">
                <Tab label="All" value="1" />
                <Tab label="Accepted" value="2" />
                <Tab label="Rejected" value="3" />
                </TabList>
            </Box>
            <TabPanel value="1"><CustomTable data={data}/></TabPanel>
            <TabPanel value="2"><CustomTable data={data1}/></TabPanel>
            <TabPanel value="3"><CustomTable data={data}/></TabPanel>
        </TabContext>
       </Grid>
    </Grid>
  )
}

export default CandidateTable
