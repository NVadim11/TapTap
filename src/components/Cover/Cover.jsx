import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
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
		opacity: '0.5',
	};

	const macroChipAnimation = {
		y: [0, -20, 0],
		transition: {
			duration: 4,
			ease: 'easeInOut',
			repeat: Infinity,
		},
	};

	const microChipAnimation = {
		y: [0, 20, 0],
		transition: {
			duration: 4,
			ease: 'easeInOut',
			repeat: Infinity,
		},
	};

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
			<img src={coverImg} alt='Cover' style={coverStyles} />

			<motion.div
				style={{ position: 'absolute', left: '81px' }}
				animate={macroChipAnimation}
			>
				<Icons.MacroChip />
			</motion.div>

			<motion.div
				style={{ position: 'absolute', right: '200px' }}
				animate={microChipAnimation}
			>
				<Icons.MicroChip />
			</motion.div>

			<Box
				sx={{
					position: 'relative',
					zIndex: 1,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: 'center',
					height: '100vh',
					textAlign: 'center',
					color: '#fff',
				}}
			>
				<Typography
					variant='h1'
					sx={{
						fontSize: '88px',
						lineHeight: '105%',
						letterSpacing: '-0.06em',
						textAlign: 'center',
						marginBottom: '24px',
					}}
				>
					Launch your Telegram app in two weeks
				</Typography>
				<Typography
					variant='body1'
					sx={{
						fontWeight: '400',
						fontSize: '22px',
						lineHeight: '145%',
						textAlign: 'center',
						marginBottom: '30px',
					}}
				>
					All-in-One Hub for Launching and Boosting Your Projects on Telegram!
				</Typography>
				<Button
					variant='contained'
					color='primary'
					sx={{
						borderRadius: '44px',
						display: 'flex',
						alignItems: 'center',
						height: '58px',
						padding: '27.5px',
						textTransform: 'uppercase',
						background: '#c8ff80',
					}}
				>
					<Typography
						sx={{
							fontWeight: '700',
							fontSize: '16px',
							lineHeight: '100%',
							color: '#0e0b3d',
						}}
					>
						Book a Discovery Call
					</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default Cover;
