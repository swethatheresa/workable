import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Select, MenuItem } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [disabilityCategory, setDisabilityCategory] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [experience, setExperience] = useState('');
  const [qualification, setQualification] = useState('');

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
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2} sx={{ padding: { xs: 2, sm: 15 } }}>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" fontWeight="bold">
            Disability Category
          </Typography>
          <Select
            className="disabilityselect"
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
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
