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
				style={{ position: 'absolute', left: '81px',  display: isMobile? 'none' : 'block' }}
				animate={macroChipAnimation}
			>
				<Icons.MacroChip />
			</motion.div>

			<motion.div
				style={{ position: 'absolute', right: '200px',  display: isMobile? 'none' : 'block' }}
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
					height: '100vh',
					textAlign: 'center',
					color: '#fff',
					maxWidth: '1066px',
				}}
			>
				<Typography
					variant='h1'
					sx={{
            fontSize: isMobile ? '54px' : '88px',
						lineHeight: isMobile ? '122%' : '105%',
						letterSpacing: '-0.06em',
						textAlign: 'center',
						marginBottom: '24px',
						marginTop: isMobile ? '40px' : '72px',
            fontWeight: '700'
					}}
				>
					{isMobile ? (
						<>
							Launch your <br /> Telegram <br /> app in two <br /> weeks
						</>
					) : (
            <>
            Launch your Telegram app in two weeks
            </>
					)}
				</Typography>
				<Typography
					variant='body1'
					sx={{
						fontWeight: '400',
						fontSize: '22px',
						lineHeight: '145%',
						textAlign: 'center',
            marginTop: '24px',
					}}
				>
          	{isMobile ? (
						<>
            	All-in-One Hub <br /> for Launching and <br/>  Boosting Your Projects <br /> on Telegram!
						</>
					) : (
            <>
            		All-in-One Hub for Launching and Boosting Your Projects on Telegram!
            </>
					)}
				</Typography>
				<Button
					variant='contained'
					color='primary'
					sx={{
            marginTop: '30px',
						borderRadius: '44px',
						display: 'flex',
						alignItems: 'center',
						height: '58px',
						padding: '27.5px',
						textTransform: 'uppercase',
						background: '#c8ff80',
						transition: 'background-color 0.25s ease', // Плавный переход для фона кнопки
            '& svg path' : {
              transition: 'fill 0.25s ease'
            },
						'&:hover': {
							backgroundColor: 'primary.main', // Используем цвет фона MUI по умолчанию
							'& .text': {
								color: '#ffffff', // Изменяем цвет текста на белый при ховере
							},
              '& svg path': {
                fill: '#ffffff', // Изменяем цвет SVG path на белый при ховере
                transition: 'fill 0.25s ease'
              },
						},
					}}
				>
					<Typography
						className='text'
						sx={{
							fontWeight: '700',
							fontSize: '16px',
							lineHeight: '100%',
							color: '#0e0b3d',
							display: 'flex',
							alignItems: 'center',
							transition: 'color 0.25s ease', // Плавный переход для текста
						}}
					>
						Book a Discovery Call
						<Box
							sx={{
								marginLeft: '17px',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<Icons.Rocket />
						</Box>
					</Typography>
				</Button>
			</Box>
		</Box>
	);
};

export default Cover;
