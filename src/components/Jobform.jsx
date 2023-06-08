import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Select, MenuItem } from '@mui/material';
import { UserAuth } from "../context/AuthContext";
import { addJobDetails } from "../services/JobDetails";
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment';

const Form = () => {
  const [JobTitle, setJobTitle] = useState('');
  const [JobLocation, setJobLocation] = useState('');
  const [SalaryRange, setSalaryRange] = useState(0);
  const [disabilityCategory, setDisabilityCategory] = useState('');
  const [JobType, setJobType] = useState('');
  const [ApplicationDeadline, setApplicationDeadline] = useState('');
  const [NumberofOpenings, setNumberofOpenings] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const {user} = UserAuth();

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Handle form submission logic here
    const job = {
      JobTitle,
      JobLocation,
      SalaryRange,
      disabilityCategory,
      JobType,
      ApplicationDeadline,
      NumberofOpenings,
      experience,
      qualification,
      jobDescription,
    }
    await addJobDetails(job,user.uid);
    console.log(job);


    // Reset form fields
    setJobTitle('');
    setJobLocation('');
    setSalaryRange('');
    setDisabilityCategory('');
    setJobType('');
    setApplicationDeadline('');
    setNumberofOpenings('');
    setExperience('');
    setQualification('');
    setJobDescription('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ padding: { xs: 2, sm: 15 } }}>
        <Grid item xs={12} sm={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Job Title
          </Typography> */}
          <TextField
            value={JobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            fullWidth
            required
            label="Job Title"
            margin="normal"
            variant="outlined"
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Job Location
          </Typography> */}
          <TextField
            value={JobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            fullWidth
            required
            label="Job Location"
            margin="normal"
            variant="outlined"
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Salary Range
          </Typography> */}
          <TextField
            value={SalaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            fullWidth
            required
            type='number'
            label="Salary Range"
            margin="normal"
            variant="outlined"
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Disability Category
          </Typography> */}
          <Select
            className="disabilityselect"
            value={disabilityCategory}
            onChange={(e) => setDisabilityCategory(e.target.value)}
            fullWidth
            required
            label="Disablity Category"
            margin="normal"
            variant="outlined"
          >
            <MenuItem value="Category 1">Category 1</MenuItem>
            <MenuItem value="Category 2">Category 2</MenuItem>
            <MenuItem value="Category 3">Category 3</MenuItem>
          </Select>
        </Grid>


        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Job Type
          </Typography> */}
          <Select
            className="JobType"
            value={JobType}
            onChange={(e) => setJobType(e.target.value)}
            fullWidth
            required
            label="Job Type"
            margin="normal"
            variant="outlined"
          >
            <MenuItem value="Category 1">Category 1</MenuItem>
            <MenuItem value="Category 2">Category 2</MenuItem>
            <MenuItem value="Category 3">Category 3</MenuItem>
          </Select>
        </Grid>



        <Grid item xs={12} sm={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Application Deadline
          </Typography> */}
          {/* <TextField
            value={ApplicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
            fullWidth
            required
            label="Application Deadline"
            margin="normal"
            variant="outlined"
          /> */}
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker label="Application Deadline"
              onChange={(date) => {
                // const standardDate = new Date(date._t)
                // const formattedDate = moment(standardDate).format('YYYY-MM-DD')
                setApplicationDeadline(date._d);
                console.log(date._d)
              }}
              fullWidth
              sx={{ width: '100%'}}
            />
          </LocalizationProvider>
        </Grid>


        <Grid item xs={12} sm={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Number of Openings
          </Typography> */}
          <TextField
            value={NumberofOpenings}
            onChange={(e) => setNumberofOpenings(e.target.value)}
            fullWidth
            required
            label="Number of Openings"
            margin="normal"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Experience
          </Typography> */}
          <TextField
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            fullWidth
            required
            label="Experience"
            margin="normal"
            variant="outlined"
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Qualification
          </Typography> */}
          <TextField
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            fullWidth
            required
            label="Qualification"
            margin="normal"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Job Description
          </Typography> */}
          <TextField
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            fullWidth
            required
            label="Job Description"
            margin="normal"
            variant="outlined"
            multiline
            rows={6}
          />
        </Grid>

        
        <Grid item container justifyContent={'flex-end'} xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Post Job
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
