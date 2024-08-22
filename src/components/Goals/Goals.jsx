import React from 'react';
import { useTheme, useMediaQuery, Box, Typography, Grid, Paper } from '@mui/material';
import greenCover from '../../img/greenCover.png';
import whiteCover from '../../img/whiteCover.png';
import Icons from '../Icons/Icons';

const Goals = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280px'));

	const coverStyles = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		opacity: '0.5',
		top: '30%',
		right: 0,
		zIndex: 0, // Ensure these covers are in the background
	};

	return (
		<Box
			id='goals'
			sx={{
				display: 'flex',
				position: 'relative',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				padding: '137px 16px 0',
				zIndex: 1, // Ensure content is above background covers
			}}
		>
			{/* Background Covers */}
			<img src={greenCover} alt='Green Cover' style={coverStyles} />
			<img src={whiteCover} alt='White Cover' style={coverStyles} />

			{/* Main Block */}
			<Box
				sx={{
					marginBottom: '40px',
					width: isMobile ? 'auto' : '358px',
					textAlign: 'center',
					zIndex: 2, // Ensure this is on top of the covers
				}}
			>
				<Typography
					variant='h2'
					sx={{
						fontSize: isMobile ? '46px' : '74px',
						fontWeight: 700,
						lineHeight: '116%',
						letterSpacing: '-0.06em',
						textTransform: 'capitalize',
						color: '#fff',
						marginBottom: '24px',
					}}
				>
					Our Goals
				</Typography>
				<Typography
					variant='body1'
					sx={{
						fontWeight: 400,
						fontSize: '20px',
						lineHeight: '160%',
						color: '#fff',
						marginBottom: isMobile ? '35px' : '20px',
					}}
				>
					Harnessing the power of Telegram Mini Apps to drive rapid growth and maximize
					profits for investors and partners.
				</Typography>
			</Box>

			{/* Two Information Blocks */}
			<Grid container spacing={4} sx={{ zIndex: 2 }}>
				{[
					{
						title: 'Telegram: The Future of the Web',
						description:
							'Telegram Mini Apps for businesses, projects, websites, Telegram pages, or any other social network/digital identity will become essential and commonplace within a year. Prepare for the future of web interaction.',
						borderRadius: '24px 24px 0 24px',
						icon: <Icons.telegramIcon />,
					},
					{
						title: 'Unlock Rapid Growth with Tapal.ca',
						description:
							"Experience rapid growth and increased profits in just 2 weeks with Tapal.ca. Our Telegram Mini Apps are the fastest way to scale your business. Tapal.ca is your gateway to success, offering the quickest growth you've ever seen with your own customized Telegram Mini Apps.",
						borderRadius: '24px 24px 24px 0',
						icon: <Icons.planetIcon />,
					},
				].map((block, index) => (
					<Grid item xs={12} md={6} key={index}>
						<Paper
							elevation={3}
							sx={{
								borderRadius: block.borderRadius,
								padding: '20px',
								background: 'rgba(10, 14, 53, 0.32)',
								zIndex: 2, // Ensure this is on top of the covers
							}}
						>
							<Typography
								variant='h5'
								sx={{
									display: 'flex', // Flex container
									alignItems: 'center', // Vertically center icon and title
									gap: '8px', // Space between icon and title
									fontWeight: 700,
									fontSize: '28px',
									lineHeight: '129%',
									letterSpacing: '-0.06em',
									textTransform: 'capitalize',
									color: '#fff',
									marginBottom: '16px',
								}}
							>
								<Box
									sx={{
										width: '32px',
										height: '32px',
										display: 'flex', // Ensure the icon is centered within the box
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									{block.icon}
								</Box>
								{block.title}
							</Typography>
							<Typography
								variant='body1'
								sx={{
									fontWeight: 400,
									fontSize: '18px',
									lineHeight: '156%',
									color: '#fff',
								}}
							>
								{block.description}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>

			{/* Statistics Block */}
			<Grid
				container
				spacing={isMobile ? 7 : 4}
				direction={isMobile ? 'column' : 'row'}
				justifyContent='center'
				alignItems='center'
				sx={{ marginTop: '40px', zIndex: 2 }}
			>
				{[
					{ title: '35M+', description: 'Tap Swap' },
					{ title: '950K+', description: 'Ghost Drive' },
					{ title: '250K', description: 'Tomo Cat' },
					{ title: '220K', description: 'Tiger' },
					{ title: '75K', description: 'Ben Dog' },
				].map((stat, index) => (
					<Grid item key={index}>
						<Paper
							elevation={3}
							sx={{
								textAlign: 'center',
								background: 'transparent',
								padding: '20px',
								boxShadow: 'none',
								border: 'none',
								zIndex: 2,
							}}
						>
							<Typography
								variant='h4'
								sx={{
									fontWeight: 700,
									color: '#c8ff80',
									fontSize: '76px',
									lineHeight: '121%',
								}}
							>
								{stat.title}
							</Typography>
							<Typography
								variant='body2'
								sx={{
									color: '#fff',
									fontSize: '18px',
									fontWeight: 500,
									marginTop: '10px',
								}}
							>
								{stat.description}
							</Typography>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};

export default Goals;
