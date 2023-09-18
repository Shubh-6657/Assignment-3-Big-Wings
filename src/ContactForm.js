import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './ContactForm.css';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; 
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone'; 
import FacebookIcon from '@mui/icons-material/Facebook'; 
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter'; 

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required('Phone Number is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const contactFormStyle = {
    background: 'rgba(41, 56, 75, 1)', 
    borderRadius: '25px',
  };

  const whiteTextStyle = {
    color: 'white', 
  };

  const blackLabelStyle = {
    color: 'black',
  };

  const whiteTextFieldStyle = {
    backgroundColor: 'white', 
  };

  return (
    <Paper elevation={3} className="contact-form" style={contactFormStyle}>
      <form onSubmit={formik.handleSubmit}>
        <h1 style={{ fontSize: '16px', ...whiteTextStyle }}>
          Please enter your Name, Email ID & Phone Number
        </h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <Grid item xs={12}>
          <Grid item xs={12}>
          <TextField
            label="Name Surname"
            name="name"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange}
            InputLabelProps={{
              style: { fontSize: '14px', ...blackLabelStyle },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AccountCircleIcon style={{ color: '#00aeef' }} /> 
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: '30px', 
                border: '1px solid white',
                background: 'white', 
              },
              "& .MuiOutlinedInput-input": {
                height: '16px',
                ...whiteTextStyle,
                borderRadius: '30px', 
              },
            }}
          />
</Grid>
</Grid>
        </Grid>
        <Grid item xs={12}>
        <TextField
          label="Email"
          name="email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          InputLabelProps={{
            style: { fontSize: '14px', ...blackLabelStyle },
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <EmailIcon style={{ color: '#00aeef' }} /> 
              </InputAdornment>
            ),
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: '30px', 
              border: '1px solid white',
              background: 'white', 
            },
            "& .MuiOutlinedInput-input": {
              height: '16px',
              ...whiteTextStyle,
              borderRadius: '30px', 
            },
          }}
        />
</Grid>
          <Grid item xs={12}>
          <TextField
            label="Phone Number"
            name="phone number"
            fullWidth
            value={formik.values.phoneNumber} 
            onChange={formik.handleChange}
            InputLabelProps={{
              style: { fontSize: '14px', ...blackLabelStyle },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PhoneIcon  style={{ color: '#00aeef' }} />
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: '30px',
                border: '1px solid white',
                background: 'white', 
              },
              "& .MuiOutlinedInput-input": {
                height: '16px',
                ...whiteTextStyle,
                borderRadius: '30px', 
              },
            }}
          />
</Grid>
<Grid item xs={12}>
  <Button variant="contained" color="primary" type="submit" fullWidth style={{borderRadius: '20px',
      backgroundColor: '#00aeef',color: 'white', }}>
          Next
  </Button>
</Grid>
</Grid>
<h5 style={{ textAlign: 'center', ...whiteTextStyle }}>
  Already a member? Click on <a href="#" style={{ color: '#00aeef' }} >LOG IN.</a>
  <br /> <br/>
  <FacebookIcon style={{ color: '#FFFFFF', fontSize: '24px', marginRight: '8px' }} />
  <InstagramIcon style={{ color: '#FFFFFF', fontSize: '24px', marginRight: '8px' }} />
  <TwitterIcon style={{ color: '#FFFFFF', fontSize: '24px' }} />
</h5>


  </form>
 </Paper>
  );
};

export default ContactForm;
