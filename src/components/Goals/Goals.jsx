import React from 'react';
import { useTheme, useMediaQuery } from '@mui/material';
import { Box, Typography, Grid, Paper } from '@mui/material';

const Goals = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	return (
		<Box id='goals' sx={{ padding: '137px 16px 0px' }}>
			{/* Main Block */}
			<Box sx={{ marginBottom: '40px', textAlign: 'center' }}>
				<Typography
					variant='h2'
					sx={{
						fontSize: isMobile ? '46px' : '74px',
						fontWeight: 700,
						lineHeight: '116%',
						letterSpacing: '-0.06em',
						textTransform: 'capitalize',
						color: '#fff;',
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
						color: '#fff;',
						marginBottom: isMobile ? '35px' : '20px',
					}}
				>
					Harnessing the power of Telegram Mini Apps to drive rapid growth and maximize
					profits for investors and partners.
				</Typography>
			</Box>

			{/* Two Information Blocks */}
			<Grid container spacing={4}>
				<Grid item xs={12} md={6}>
					<Paper
						elevation={3}
						sx={{
							borderRadius: '24px 24px 0 24px',
							padding: '20px',
							background: 'rgba(10, 14, 53, 0.32)',
						}}
					>
						<Typography
							variant='h5'
							sx={{
								fontWeight: 700,
								fontSize: '28px',
								lineHeight: '129%',
								letterSpacing: '-0.06em',
								textTransform: 'capitalize',
								color: '#fff',
								marginBottom: '16px',
							}}
						>
							Telegram: The Future of the Web
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
							Telegram Mini Apps for businesses, projects, websites, Telegram pages, or
							any other social network/digital identity will become essential and
							commonplace within a year. Prepare for the future of web interaction.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} md={6}>
					<Paper
						elevation={3}
						sx={{
							borderRadius: '24px 24px 24px 0',
							padding: '20px',
							background: 'rgba(10, 14, 53, 0.32)',
						}}
					>
						<Typography
							variant='h5'
							sx={{
								fontWeight: 700,
								fontSize: '28px',
								lineHeight: '129%',
								letterSpacing: '-0.06em',
								textTransform: 'capitalize',
								color: '#fff',
								marginBottom: '16px',
							}}
						>
							Unlock Rapid Growth with Tapal.ca
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
							Experience rapid growth and increased profits in just 2 weeks with Tapal.ca.
							Our Telegram Mini Apps are the fastest way to scale your business. Tapal.ca
							is your gateway to success, offering the quickest growth you've ever seen
							with your own customized Telegram Mini Apps.
						</Typography>
					</Paper>
				</Grid>
			</Grid>

			{/* Statistics Block */}
			<Grid container spacing={4} sx={{ marginTop: '40px' }}>
				<Grid item xs={12} sm={6} md={2.4}>
					<Paper elevation={3} sx={{ textAlign: 'center' }}>
						<Typography
							variant='h4'
							sx={{
								fontWeight: 700,
								color: '#c8ff80',
								fontSize: '76px',
								lineHeight: '121%',
								textAlign: 'center',
							}}
						>
							35M+
						</Typography>
						<Typography variant='body2' sx={{ color: '#555' }}>
							Tap Swap
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={2.4}>
					<Paper elevation={3} sx={{ textAlign: 'center' }}>
						<Typography
							variant='h4'
							sx={{
								fontWeight: 700,
								color: '#c8ff80',
								fontSize: '76px',
								lineHeight: '121%',
								textAlign: 'center',
							}}
						>
							950K+
						</Typography>
						<Typography variant='body2' sx={{ color: '#555' }}>
							Ghost Drive
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={2.4}>
					<Paper elevation={3} sx={{ textAlign: 'center' }}>
						<Typography
							variant='h4'
							sx={{
								fontWeight: 700,
								color: '#c8ff80',
								fontSize: '76px',
								lineHeight: '121%',
								textAlign: 'center',
							}}
						>
							250K
						</Typography>
						<Typography variant='body2' sx={{ color: '#555' }}>
							Tomo Cat
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={2.4}>
					<Paper elevation={3} sx={{ textAlign: 'center' }}>
						<Typography
							variant='h4'
							sx={{
								fontWeight: 700,
								color: '#c8ff80',
								fontSize: '76px',
								lineHeight: '121%',
								textAlign: 'center',
							}}
						>
							220K
						</Typography>
						<Typography variant='body2' sx={{ color: '#555' }}>
							Tiger
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} sm={6} md={2.4}>
					<Paper elevation={3} sx={{ textAlign: 'center' }}>
						<Typography
							variant='h4'
							sx={{
								fontWeight: 700,
								color: '#c8ff80',
								fontSize: '76px',
								lineHeight: '121%',
								textAlign: 'center',
							}}
						>
							75K
						</Typography>
						<Typography variant='body2' sx={{ color: '#555' }}>
							Ben Dog
						</Typography>
					</Paper>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Goals;
