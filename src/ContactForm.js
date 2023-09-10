import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; 
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import './ContactForm.css';

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

  return (
    <Paper elevation={3} className="contact-form">
      <form onSubmit={formik.handleSubmit}>
      <h1 style={{ fontSize: '16px' }}>Please enter your Name,EmailID & Phone Number</h1>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Name Surname"
              name="name"
              fullWidth
              value={formik.values.name}
              onChange={formik.handleChange}
              // style={textFieldStyle}
              InputLabelProps={{
                style: {
                  fontSize: '14px', 
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: 1,
                    borderRadius: '50px',
                  },
                  "& input": {
                    height: '20px', 
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              // style={textFieldStyle}
              InputLabelProps={{
                style: {
                  fontSize: '14px', 
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: 1,
                    borderRadius: '50px', 
                  },
                  "& input": {
                    height: '20px',
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone Number"
              name="phone"
              type="tel"
              fullWidth
              value={formik.values.phone}
              onChange={formik.handleChange}
              // style={textFieldStyle}
              InputLabelProps={{
                style: {
                  fontSize: '14px', 
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& > fieldset": {
                    border: 1,
                    borderRadius: '50px',
                  },
                  "& input": {
                    height: '20px',
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit"  fullWidth
              style={{
                borderRadius: '20px', // You can adjust the value to control the rounding
              }}>
              Next
            </Button>
          </Grid>
        </Grid>
        <h5 style={{ textAlign: 'center' }}>Already a member? Click on <a href="#">LOG IN.</a></h5>
      </form>
    </Paper>
  );
};

export default ContactForm;
