import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
	const navigate = useNavigate();

	const handleNavigation = (id) => {
		navigate('/'); // Navigate to the homepage
		setTimeout(() => {
			document.querySelector(`#${id}`).scrollIntoView({
				behavior: 'smooth',
			});
		}, 100); // Slight delay to ensure the page is fully loaded
	};

	const menuItems = [
		{ name: 'Why Now', id: 'cover' },
		{ name: 'Our Projects', id: 'projects' },
		{ name: 'How it Works', id: 'about' },
		{ name: 'Our Goals', id: 'goals' },
		{ name: 'Work with Us', id: 'form' },
		{ name: 'Our Social Network', id: 'social' },
		{ name: 'Policy', id: 'policy' }, // Redirect to Policy Page
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
			<Grid container spacing={3} justifyContent='center'>
				{menuItems.map((item, index) => (
					<Grid item key={index}>
						{item.id === 'policy' ? (
							<ScrollLink
								to={item.id}
								smooth={true}
								duration={2000}
								onClick={() => navigate('/policy')}
								style={{
									cursor: 'pointer',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								{item.name}
							</ScrollLink>
						) : (
							<ScrollLink
								to={item.id}
								smooth={true}
								duration={2000}
								onClick={() => handleNavigation(item.id)}
								style={{
									cursor: 'pointer',
									color: 'inherit',
									textDecoration: 'none',
								}}
							>
								{item.name}
							</ScrollLink>
						)}
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
