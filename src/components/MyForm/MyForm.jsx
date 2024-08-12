import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box, Typography, ButtonBase  } from '@mui/material';
import Icons from '../Icons/Icons.jsx';


const MyForm = () => {

  const iconButtonStyles = {
    width: 66,
    height: 66,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0e35',
    padding: 0,
    transition: '.25s',
    borderRadius: '50%',
    '&:hover': {
      backgroundColor: 'rgba(10, 14, 53, 0.8)',
      transition: '.25s',
    },
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
      }}
      onSubmit={(values) => {
        console.log('Form Data', values);
      }}
    >
      {() => (
        <Form  id="form">
          <Box sx={{ maxWidth: 500, margin: '0 auto', padding: 2 }}>
            {/* Форма */}
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              Fill in the form below to send us a message.
            </Typography>

            {/* Поле Name */}
            <Box sx={{ marginBottom: 2 }}>
              <Field
                name="name"
                as={TextField}
                label="Name"
                placeholder="ENTER YOUR NAME"
                fullWidth
                variant="outlined"
              />
            </Box>

            {/* Поле Email */}
            <Box sx={{ marginBottom: 2 }}>
              <Field
                name="email"
                as={TextField}
                label="Email"
                placeholder="ENTER YOUR EMAIL"
                fullWidth
                variant="outlined"
              />
            </Box>

            {/* Поле Phone */}
            <Box sx={{ marginBottom: 2 }}>
              <Field
                name="phone"
                as={TextField}
                label="Phone Number"
                placeholder="ENTER YOUR PHONE NUMBER"
                fullWidth
                variant="outlined"
              />
            </Box>

            {/* Поле Message */}
            <Box sx={{ marginBottom: 2 }}>
              <Field
                name="message"
                as={TextField}
                label="Message"
                placeholder="TYPE YOUR TEXT"
                fullWidth
                multiline
                rows={4}
                variant="outlined"
              />
            </Box>

            {/* Кнопка Send */}
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Send
            </Button>

            {/* Блок соціальних мереж */}
            <Box sx={{ marginTop: 4, textAlign: 'center' }} id="social">
              <Typography variant="h6" gutterBottom>
                Our Social Networks
              </Typography>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <ButtonBase
                  component="a"
                  href="https://www.facebook.com"
                  target="_blank"
                  color="primary"
                  sx={iconButtonStyles}
                >
                  <Icons.Facebook/>
                </ButtonBase>
                <ButtonBase
                  component="a"
                  href="https://t.me"
                  target="_blank"
                  color="primary"
                  sx={iconButtonStyles}
                >
                  <Icons.TG/>
                </ButtonBase>
                <ButtonBase
                  component="a"
                  href="https://discord.com"
                  target="_blank"
                  color="primary"
                  sx={iconButtonStyles}
                >
                  <Icons.Discord/>
                </ButtonBase>
              </Box>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default MyForm;
