import {useEffect, useState, React} from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import { Typography,Tab,Box } from '@mui/material';
import { TabContext } from '@mui/lab';
import theme from '../theme';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CustomTable from './CustomTable';
import { useParams } from 'react-router-dom';

const CandidateTable = () => {
    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const route = useParams();
    return (
        <Grid container flexDirection={'column'} overflow={'auto'}
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
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="All" value="1" />
                    <Tab label="Selected" value="2" />
                    <Tab label="Not Selected" value="3" />
                    <Tab label="Shortlisted" value="4" />
                    <Tab label="Waitlisted" value="5" />
                    </TabList>
                </Box>
                <TabPanel value="1"><CustomTable id={route.id}/></TabPanel>
                <TabPanel value="2"><CustomTable id={route.id} status={"Selected"}/></TabPanel>
                <TabPanel value="3"><CustomTable id={route.id}status={"Not Selected"}/></TabPanel>
                <TabPanel value="4"><CustomTable id={route.id} status={"Shortlist"}/></TabPanel>
                <TabPanel value="5"><CustomTable id={route.id} status={"Waitlist"}/></TabPanel>
            </TabContext>
        </Grid>
    </Grid>
    )
}

export default CandidateTable
