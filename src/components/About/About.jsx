import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';

const About = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));
	return (
		<Box id='about'
		sx={{
			width: '100%',
		  background: 'linear-gradient(314deg, #d1f0e2 43.89%, #a4b8fe 100%)',
		  padding: '80px 0 130px 0'

		}} >
			<Typography
				variant='h2'
				sx={{
					fontSize: isMobile ? '46px' : '74px',
					fontWeight: 700,
					lineHeight: '116%',
					letterSpacing: '-0.06em',
					textTransform: 'capitalize',
					textAlign: 'center',
					color: '#0e0b3d',
				}}
			>
				How it Works
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontWeight: 400,
					fontSize: '20px',
					lineHeight: '160%',
					textAlign: 'center',
					color: '#0e0b3d',
				}}
			>
				Discover how we bring your ideas to life
			</Typography>
		</Box>
	);
};

export default About;
