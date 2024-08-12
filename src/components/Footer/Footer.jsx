import React from 'react';
import { Box, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0a0e35',
        color: '#fff',
        padding: '40px 20px',
        textAlign: 'center',
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        <Grid item>
          <Link href="#" color="inherit" underline="none">
            Home
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit" underline="none">
            About Us
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit" underline="none">
            Services
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit" underline="none">
            Blog
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit" underline="none">
            Contact
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit" underline="none">
            Support
          </Link>
        </Grid>
      </Grid>

      <Box sx={{ marginTop: 4 }}>
        <Typography variant="body2" color="inherit">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
