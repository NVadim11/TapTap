import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Icons from '../Icons/Icons.jsx';
import coverImg from '../../img/cover-img.png';

const Cover = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

    const coverStyles = {
        position: 'absolute',
        top: 0,
        left: isMobile ? '-16px' : '-66px', 
        width: '100%',
        height: '100%',
        opacity: '0.5'
    };
    const macroChip = {
        position: 'absolute'
    }
  return (
    <Box
      id='cover'
      sx={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        boxSizing: 'border-box',
      }}
    >
      <img src={coverImg} alt="Cover" style={coverStyles} />
      <div style={macroChip} >
        <Icons.MacroChip />
      </div>
      <Box sx={{
        position: 'relative',
        zIndex: 1,
      }}>
        <Typography variant="h1" sx={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#fff',
        }}>
          Launch your Telegram 
app in two weeks
        </Typography>
        <Typography variant="body1" sx={{
          fontSize: '1.25rem',
          marginBottom: '30px',
          color: '#fff',
        }}>
         All-in-One Hub for Launching and Boosting Your Projects on Telegram!
        </Typography>
        <Button variant="contained" color="primary" sx={{
          padding: '10px 20px',
          fontSize: '1rem',
          borderRadius: '8px',
        }}>
          Book a Discovery Call
        </Button>
      </Box>
    </Box>
  );
};

export default Cover;
