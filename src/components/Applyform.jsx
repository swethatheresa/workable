import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Select, MenuItem, InputLabel } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [disabilityCategory, setDisabilityCategory] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [salaryRange, setSalaryRange] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [jobApplicationLink, setJobApplicationLink] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission logic here
    console.log('Name:', name);
    console.log('Resume Link:', resumeLink);
    console.log('Contact Number:', contactNumber);
    console.log('Disability Category:', disabilityCategory);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Salary Range:', salaryRange);
    console.log('Experience:', experience);
    console.log('Qualification:', qualification);
    console.log('Application Deadline:', applicationDeadline);
    console.log('Job Application Link:', jobApplicationLink);
    console.log('Job Description:', jobDescription);

    // Reset form fields
    setName('');
    setResumeLink('');
    setContactNumber('');
    setDisabilityCategory('');
    setEmail('');
    setAddress('');
    setSalaryRange('');
    setExperience('');
    setQualification('');
    setApplicationDeadline('');
    setJobApplicationLink('');
    setJobDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} padding={15}>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Name
          </Typography>
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Resume Link
          </Typography>
          <TextField
            value={resumeLink}
            onChange={(e) => setResumeLink(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" fontWeight="bold">
            Contact Number
          </Typography>
          <TextField
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Disability Category
          </Typography>
          <Select className='disabilityselect'
            value={disabilityCategory}
            onChange={(e) => setDisabilityCategory(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          >
            <MenuItem value="Category 1">Category 1</MenuItem>
            <MenuItem value="Category 2">Category 2</MenuItem>
            <MenuItem value="Category 3">Category 3</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Email
          </Typography>
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Address
          </Typography>
          <TextField
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Salary Range
          </Typography>
          <TextField
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Experience
          </Typography>
          <TextField
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Qualification
          </Typography>
          <TextField
            value={qualification}
            onChange={(e) => setQualification(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" fontWeight="bold">
            Application Deadline
          </Typography>
          <TextField
            value={applicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" fontWeight="bold">
            Job Application Link
          </Typography>
          <TextField
            value={jobApplicationLink}
            onChange={(e) => setJobApplicationLink(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" fontWeight="bold">
            Job Description
          </Typography>
          <TextField
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
            multiline
            rows={4}
          />
        </Grid>
        <Grid item container xs={12} justifyContent={'flex-end'} marginTop={5}>
          <Button variant="contained" color="primary" type="submit" >
            Apply
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
