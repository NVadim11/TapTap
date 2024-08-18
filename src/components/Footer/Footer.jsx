import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
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
					duration: 2000,
					offset: -70,
				});
			}, 0);
		}
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

	const linkStyles = {
		cursor: 'pointer',
		color: 'inherit',
		textDecoration: 'none',
	};

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
						<Typography sx={linkStyles} onClick={() => handleLinkClick(item.id)}>
							{item.name}
						</Typography>
					</Grid>
				))}
			</Grid>

			<Box sx={{ marginTop: 4 }}>
				<Typography variant='body2' color='inherit'>
					© {new Date().getFullYear()} Your Company. All rights reserved.
				</Typography>
			</Box>
		</Box>
	);
};

export default Footer;
