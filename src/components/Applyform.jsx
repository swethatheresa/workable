import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Select, MenuItem } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from 'moment/moment'

const Form = () => {
  const [name, setName] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [disabilityCategory, setDisabilityCategory] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [salaryRange, setSalaryRange] = useState(0)
  const [applicationDeadline, setApplicationDeadline] = useState('')
  const [jobApplicationLink, setJobApplicationLink] = useState('')
  const [jobDescription, setJobDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Resume Link:', resumeLink);
    console.log('Contact Number:', contactNumber);
    console.log('Disability Category:', disabilityCategory);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Experience:', experience);
    console.log('Qualification:', qualification);

    // Reset form fields
    setName('');
    setResumeLink('');
    setContactNumber('');
    setDisabilityCategory('');
    setEmail('');
    setAddress('');
    setExperience('');
    setQualification('');
    setSalaryRange('')
    setApplicationDeadline('')
    setJobApplicationLink('')
    setJobDescription('')
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ padding: { xs: 2, sm: 15 } }}>
        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Name
          </Typography> */}
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            label="Name"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Resume Link
          </Typography> */}
          <TextField
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            fullWidth
            label="Resume Link"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Contact Number
          </Typography> */}
          <TextField
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            fullWidth
            label="Contact Number"
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
            label="Disablity category"
            fullWidth
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
            Email
          </Typography> */}
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            label="Email"
            margin="normal"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Address
          </Typography> */}
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            label="Address"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Salary Range
          </Typography> */}
          <TextField
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            fullWidth
            label="Salary Range"
            type='number'
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
            label="Experience"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Qualification
          </Typography> */}
          <TextField
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            fullWidth
            label="Qualification"
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Application Deadline
          </Typography> */}
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
        <Grid item xs={12}>
          {/* <Typography variant="subtitle1" fontWeight="bold">
            Job Application Link
          </Typography> */}
          <TextField
            value={jobApplicationLink}
            onChange={(e) => setJobApplicationLink(e.target.value)}
            fullWidth
            label="Job Application Link"
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
            label="Job Description"
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item container justifyContent={'flex-end'} xs={12}>
          <Button variant="contained" color="primary" type="submit">
            Apply
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
