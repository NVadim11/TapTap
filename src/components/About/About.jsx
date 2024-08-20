import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Icons from '../Icons/Icons.jsx';

const About = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	return (
		<Box
			id='about'
			sx={{
				background: 'linear-gradient(314deg, #d1f0e2 43.89%, #a4b8fe 100%)',
				padding: '80px 16px 130px 16px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
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
					color: '#0e0b3d',
					marginBottom: '24px',
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
					color: '#0e0b3d',
					marginBottom: isMobile ? '35px' : '20px',
				}}
			>
				Discover how we bring your ideas to life
			</Typography>

			<Box
				sx={{
					display: 'flex',
					flexDirection: isMobile ? 'column' : 'row',
					gap: '10px',
					flexWrap: 'wrap',
					borderRadius: '0 24px 24px 24px',
				}}
			>
				<Box
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#161c59',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#c8ff80',
							}}
						>
							01
						</Typography>
						<Icons.About1 />
					</Box>
					<Box>
						<Typography
							variant='h2'
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
							Design Discussion and Creation
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
							You provide your design preferences and ideas. We create a design mockup and
							send it to you for approval.
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#161c59',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#c8ff80',
							}}
						>
							02
						</Typography>
						<Icons.About2 />
					</Box>
					<Box>
						<Typography
							variant='h2'
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
							Evaluation and Feedback
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
							We review the proposed changes and provide constructive feedback. Necessary
							adjustments are made, and the design is finalized.
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#161c59',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#c8ff80',
							}}
						>
							03
						</Typography>
						<Icons.About3 />
					</Box>
					<Box>
						<Typography
							variant='h2'
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
							Implementation and Launch
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
							We set up the server and integrate all basic product solutions: Telegram
							bot, web version, and website.
						</Typography>
					</Box>
				</Box>
				<Box
					sx={{
						flex: '1',
						borderRadius: '0 24px 24px 24px',
						width: isMobile ? 'auto' : '326px',
						background: '#161c59',
						boxShadow: '1',
						padding: '30px 34px 30px 22px',
						minHeight: isMobile ? '394px' : '450px',
					}}
				>
					<Box
						sx={{
							marginBottom: '33px',
							display: 'flex',
							justifyContent: 'space-between',
						}}
					>
						<Typography
							variant='h2'
							sx={{
								fontWeight: 700,
								fontSize: '54px',
								lineHeight: '119%',
								color: '#c8ff80',
							}}
						>
							04
						</Typography>
						<Icons.About4 />
					</Box>
					<Box>
						<Typography
							variant='h2'
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
							Marketing Support and Growth
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
							We assist you in developing a marketing strategy, setting up social media,
							and attracting an audience. We monitor your progress and offer
							recommendations for further growth.
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
