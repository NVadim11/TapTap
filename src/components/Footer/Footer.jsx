import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material'; // Import Button
import { scroller } from 'react-scroll';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
	const theme = useTheme();
	const navigate = useNavigate();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	const handleLinkClick = (id) => {
		if (id === 'policy') {
			navigate('/policy');
		} else {
			navigate('/');
			setTimeout(() => {
				scroller.scrollTo(id, {
					smooth: true,
					duration: 1500,
					offset: -70,
				});
			}, 0);
		}
	};

	// Shared button styles from Header component
	const navBtns = {
		padding: '8px 16px',
		fontSize: '16px',
		textTransform: 'initial',
		transition: 'opacity 0.25s ease-in-out',
		'&:hover': {
			opacity: 0.8,
		},
	};

	const menuItems = [
		{ name: 'Why Now', id: 'cover' },
		{ name: 'Our Projects', id: 'projects' },
		{ name: 'How it Works', id: 'about' },
		{ name: 'Our Goals', id: 'goals' },
		{ name: 'Work with Us', id: 'form' },
		{ name: 'Our Social Network', id: 'social' },
		{ name: 'Policy', id: 'policy' },
	];

	return (
		<Box
			component='footer'
			sx={{
				backgroundColor: 'transparent',
				color: '#fff',
				padding: '40px 20px',
				textAlign: 'center',
			}}
		>
			<Grid
				container
				spacing={3}
				justifyContent='center'
				direction={isMobile ? 'column' : 'row'} // Switch to column on mobile
			>
				{menuItems.map((item, index) => (
					<Grid item key={index}>
						<Button color='inherit' sx={navBtns} onClick={() => handleLinkClick(item.id)}>
							{item.name}
						</Button>
					</Grid>
				))}
			</Grid>

			<Box sx={{ marginTop: 4, color: 'rgba(255, 255, 255, 0.59)' }}>
				<Typography variant='body2' color='inherit'>
					© {new Date().getFullYear()} Your Company. All rights reserved.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
