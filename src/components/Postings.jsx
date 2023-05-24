import React from 'react'
import {Grid} from  '@mui/material';
import Card from './Card'
import rocket from '../assets/Rocket.png'

const Postings = () => {
  return (

    <Grid container spacing={2} sx={{ padding: { xs: 2, sm: 15 } }}>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        <Card img={rocket} position={"Growth Manager"}  days={10} location={"Remote"} years={"2"} applicants={"38"}  lastweek={"10"}/>
        
    </Grid>
  )
}

export default Postings