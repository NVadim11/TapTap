import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Icons from '../Icons/Icons.jsx';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [menuOpen, setMenuOpen] = useState(false);
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		const hash = location.hash;
		if (hash) {
			const element = document.querySelector(hash);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		}
	}, [location]);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
		setMenuOpen(true);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
		setMenuOpen(false);
	};

	const handleMenuItemClick = () => {
		handleMenuClose();
	};

	const handleNavigation = (id) => {
		navigate(`/#${id}`);
	};

	const isMenuOpen = Boolean(anchorEl);

	const menuItems = [
		{ name: 'Why Now', id: 'cover' },
		{ name: 'Our Projects', id: 'projects' },
		{ name: 'How it Works', id: 'about' },
		{ name: 'Our Goals', id: 'goals' },
		{ name: 'Work with Us', id: 'form' },
		{ name: 'Our Social Network', id: 'social' },
	];

	const navBtns = {
		padding: '8px 16px',
		fontSize: '16px',
		textTransform: 'initial',
		transition: 'opacity 0.25s ease-in-out',
		'&:hover': {
			opacity: 0.8,
		},
	};

	return (
		<AppBar
			position='static'
			sx={{
				backgroundColor: 'transparent',
				boxShadow: 'none',
				height: isMobile ? '90px' : '114px',
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					height: '100%',
					padding: '0 !important',
				}}
			>
				<Typography
					variant='h6'
					component='div'
					sx={{
						flexGrow: isMobile ? '1' : '0',
						fontFamily: 'var(--font-family)',
						fontWeight: 700,
						fontSize: '24px',
						lineHeight: '133%',
						letterSpacing: '-0.06em',
						color: '#fff',
						width: 'auto',
						cursor: 'pointer',
					}}
					onClick={() => handleNavigation('cover')}
				>
					TapTap
				</Typography>

				{!isMobile && (
					<Box
						sx={{
							flexGrow: 1,
							display: 'flex',
							justifyContent: 'center',
							marginLeft: 'auto',
							marginRight: 'auto',
						}}
					>
						{menuItems.map((item, index) => (
							<Button
								key={index}
								color='inherit'
								sx={navBtns}
								onClick={() => handleNavigation(item.id)}
							>
								{item.name}
							</Button>
						))}
					</Box>
				)}

				<Button
					color='inherit'
					sx={{
						border: '2px solid #c8ff80',
						borderRadius: '44px',
						padding: '0 21px',
						display: 'flex',
						alignItems: 'center',
						height: '58px',
						textTransform: 'uppercase',
						fontWeight: '700',
						fontSize: '16px',
						lineHeight: '100%',
						textAlign: 'center',
						color: '#fff',
						marginRight: isMobile ? '13px' : '0',
						transition: 'opacity 0.25s ease-in-out',
						'&:hover': {
							opacity: 0.8,
						},
					}}
				>
					Book A Call
				</Button>

				{isMobile && (
					<>
						<IconButton
							edge='start'
							color='inherit'
							aria-label='menu'
							onClick={isMenuOpen ? handleMenuClose : handleMenuOpen}
						>
							{isMenuOpen ? <CloseIcon /> : <Icons.Hamburger />}
						</IconButton>
						<Menu
							anchorEl={anchorEl}
							open={isMenuOpen}
							onClose={handleMenuClose}
							PaperProps={{
								sx: {
									width: '100%',
									left: '0!important',
									height: '100%!important',
									borderRadius: '24px 24px 0 0',
									background: 'linear-gradient(314deg, #d1f0e2 43.89%, #a4b8fe 100%)',
									top: '80px!important',
									bottom: '0!important',
									position: 'absolute',
									right: '0!important',
									maxWidth: '100%',
									maxHeight: '100%',
									fontFamily: 'FMTS !important',
									'& *': {
										fontFamily: 'FMTS !important',
									},
									'& ul': {
										padding: '31px 0 0 0',
										display: 'flex',
										flexDirection: 'column',
										gap: '12px',
									},
									'& li': {
										padding: '0 16px',
										height: '52px',
										fontWeight: 700,
										fontSize: '24px',
										lineHeight: '133%',
										textAlign: 'center',
										color: '#0e0b3d',
									},
								},
							}}
						>
							{menuItems.map((item, index) => (
								<MenuItem
									key={index}
									onClick={() => {
										handleMenuItemClick();
										handleNavigation(item.id);
									}}
								>
									{item.name}
								</MenuItem>
							))}
						</Menu>
					</>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Header;
