import React from 'react';
import { Box, Typography, Grid, ButtonBase } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import Icons from '../Icons/Icons.jsx';
import tapImg from '../../img/taptap.png';
import tapMobile from '../../img/tapMobile.png';
import tomoImg from '../../img/tomo.png';
import tomoMob from '../../img/tomoMob.png';
import benImg from '../../img/benDog.png';
import benMob from '../../img/benMob.png';
import ghostImg from '../../img/ghost.png';
import ghostMob from '../../img/ghostMob.png';
import tigerImg from '../../img/tiger.png';
import tigerMob from '../../img/tigerMob.png';
import shitImg from '../../img/shit.png';
import shitMob from '../../img/shitMob.png';

const Projects = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));

	const iconButtonStyles = {
		width: 66,
		height: 66,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#0a0e35',
		padding: 0,
		transition: '.25s',
		borderRadius: '50%',
		'&:hover': {
			backgroundColor: 'rgba(10, 14, 53, 0.8)',
			transition: '.25s',
		},
	};

	return (
		<Box id="projects"
			sx={{
				display: 'flex',
				flexDirection: 'column',
                paddingBottom: isMobile ? '75px' : '107px'
			}}
		>
			<Typography
				variant='h2'
				sx={{
					fontWeight: 700,
					fontSize: isMobile ? '46px' : '74px',
					lineHeight: '116%',
					letterSpacing: '-0.06em',
					textTransform: 'capitalize',
					textAlign: 'center',
					color: '#fff',
					marginBottom: '16px',
				}}
			>
				Our Projects
			</Typography>
			<Typography
				variant='body1'
				sx={{
					fontWeight: 400,
					fontSize: '20px',
					lineHeight: '160%',
					textAlign: 'center',
					color: '#fff',
					marginTop: '24px',
				}}
			>
				{isMobile ? (
					<>
						Discover the various <br /> projects we’ve developed. <br /> Take a look and
						see the kind <br />
						of innovative solutions we <br /> can create.
					</>
				) : (
					<>
						Discover the various projects we’ve developed. Take a look and <br /> see the
						kind of innovative solutions we can create.
					</>
				)}
			</Typography>

			<Grid container sx={{ marginTop: isMobile ? '30px' : '70px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							background: 'linear-gradient(91deg, #c7acff 0%, #fff 87.06%)',
							borderRadius: '24px 24px 0 24px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
							<Typography variant='h2'>Tap Swap</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								TapSwap is a cutting-edge financial platform where users can earn tokens
								by utilizing the app's various mining features. Your main goal is to
								maximize your in-game currency, Shares, by completing missions, inviting
								friends, and using different app boosts. Shares can later be exchanged for
								TAP tokens. 
							</Typography>
							{!isMobile && (
								<Box sx={{ display: 'flex', gap: 2, marginTop: '28px' }}>
									<ButtonBase
										component='a'
										href='https://www.facebook.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Facebook />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://t.me'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.TG />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://discord.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Discord />
									</ButtonBase>
								</Box>
							)}
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center' }}>
							<img
								src={isMobile ? tapMobile : tapImg}
								alt='Tap Swap'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
						{isMobile && (
							<Box sx={{ display: 'flex', gap: 2, marginTop: '24px' }}>
								<ButtonBase
									component='a'
									href='https://www.facebook.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Facebook />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://t.me'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.TG />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://discord.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Discord />
								</ButtonBase>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							background: 'linear-gradient(320deg, #6462f1 27.09%, #aaa9ff 100%)',
							borderRadius: '24px 24px 24px 0',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box
							sx={{
								flex: 1,
								textAlign: isMobile ? 'center' : 'left',
								order: isMobile ? '0' : '2',
								color: '#fff',
							}}
						>
							<Typography variant='h2'>Ghostdrive</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								Experience a new way to store and transform your raw data into smart data.
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								Community rewards: Upload files to earn points, climb the leaderboard, and
								boost your rewards with our exciting tp game.
							</Typography>
							{!isMobile && (
								<Box sx={{ display: 'flex', gap: 2, marginTop: '28px' }}>
									<ButtonBase
										component='a'
										href='https://www.facebook.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Facebook />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://t.me'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.TG />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://discord.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Discord />
									</ButtonBase>
								</Box>
							)}
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center', order: isMobile ? '0' : '1' }}>
							<img
								src={isMobile ? ghostMob : ghostImg}
								alt='Tap Swap'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
						{isMobile && (
							<Box sx={{ display: 'flex', gap: 2, marginTop: '24px' }}>
								<ButtonBase
									component='a'
									href='https://www.facebook.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Facebook />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://t.me'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.TG />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://discord.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Discord />
								</ButtonBase>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							background: 'linear-gradient(91deg, #c7acff 0%, #fff 87.06%)',
							borderRadius: '24px 24px 0 24px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left' }}>
							<Typography variant='h2'>TomoCat</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								Let me introduce myself — I’m Tomo, a stray cat. Tired and sad, I gain
								magical powers when you take care of me. just pet me and I’ll bring your
								rewards. To boost them, think about my food, style, and fun. Also,
								surround me with your friends. A meow fam purrs with more bonuses
							</Typography>
							{!isMobile && (
								<Box sx={{ display: 'flex', gap: 2, marginTop: '28px' }}>
									<ButtonBase
										component='a'
										href='https://www.facebook.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Facebook />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://t.me'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.TG />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://discord.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Discord />
									</ButtonBase>
								</Box>
							)}
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center' }}>
							<img
								src={isMobile ? tomoMob : tomoImg}
								alt='Tap Swap'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
						{isMobile && (
							<Box sx={{ display: 'flex', gap: 2, marginTop: '24px' }}>
								<ButtonBase
									component='a'
									href='https://www.facebook.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Facebook />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://t.me'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.TG />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://discord.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Discord />
								</ButtonBase>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							background: 'linear-gradient(314deg, #d1f0e2 43.89%, #a4b8fe 100%)',
							borderRadius: '24px 24px 24px 0',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box
							sx={{
								flex: 1,
								textAlign: isMobile ? 'center' : 'left',
								order: isMobile ? '0' : '2',
							}}
						>
							<Typography variant='h2'>Tiger</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								Hey hustlers, no need to look for new side hustles anymore because $TEMA
								is here. 
								<br />
								$TEMA
								<br />
								Hit the button, complete tasks, and watch the cash flow in, you can even
								start picking up a color of your new BMW, bro
							</Typography>
							{!isMobile && (
								<Box sx={{ display: 'flex', gap: 2, marginTop: '28px' }}>
									<ButtonBase
										component='a'
										href='https://www.facebook.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Facebook />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://t.me'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.TG />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://discord.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Discord />
									</ButtonBase>
								</Box>
							)}
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center', order: isMobile ? '0' : '1' }}>
							<img
								src={isMobile ? tigerMob : tigerImg}
								alt='Tap Swap'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
						{isMobile && (
							<Box sx={{ display: 'flex', gap: 2, marginTop: '24px' }}>
								<ButtonBase
									component='a'
									href='https://www.facebook.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Facebook />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://t.me'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.TG />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://discord.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Discord />
								</ButtonBase>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							background: 'linear-gradient(320deg, #6462f1 27.09%, #aaa9ff 100%)',
							borderRadius: '24px 24px 0 24px',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box sx={{ flex: 1, textAlign: isMobile ? 'center' : 'left', color: '#fff' }}>
							<Typography variant='h2'>BenDog</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								I'm Ben, a successful dog.
							</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								Feeling tired and lonely, I discover my magical powers when you take care
								of me. Give me some love and I will bring you a reward. To get even more
								bonuses, improve my abilities.
							</Typography>
							{!isMobile && (
								<Box sx={{ display: 'flex', gap: 2, marginTop: '28px' }}>
									<ButtonBase
										component='a'
										href='https://www.facebook.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Facebook />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://t.me'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.TG />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://discord.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Discord />
									</ButtonBase>
								</Box>
							)}
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center' }}>
							<img
								src={isMobile ? benMob : benImg}
								alt='Tap Swap'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
						{isMobile && (
							<Box sx={{ display: 'flex', gap: 2, marginTop: '24px' }}>
								<ButtonBase
									component='a'
									href='https://www.facebook.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Facebook />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://t.me'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.TG />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://discord.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Discord />
								</ButtonBase>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
			<Grid container sx={{ marginTop: '30px' }}>
				<Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
					<Box
						sx={{
							background: 'linear-gradient(91deg, #c7acff 0%, #fff 87.06%)',
							borderRadius: '24px 24px 24px 0',
							boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
							width: isMobile ? '100%' : '1340px',
							display: 'flex',
							flexDirection: isMobile ? 'column' : 'row',
							padding: isMobile ? '24px' : '50px 50px 50px 90px',
							gap: isMobile ? '22px' : '50px',
							alignItems: isMobile ? 'center' : 'flex-start',
						}}
					>
						<Box
							sx={{
								flex: 1,
								textAlign: isMobile ? 'center' : 'left',
								order: isMobile ? '0' : '2',
							}}
						>
							<Typography variant='h2'>The $hit</Typography>
							<Typography variant='body1' style={{ marginTop: '16px' }}>
								Welcome aboard!  The $HIT is ready for launch!  Hit that button, complete
								tasks, and grab your rewards. You're here to experience something new.
								Invite friends, tackle challenges, vote, claim Airdrops, and rise to the
								top! 
							</Typography>
							{!isMobile && (
								<Box sx={{ display: 'flex', gap: 2, marginTop: '28px' }}>
									<ButtonBase
										component='a'
										href='https://www.facebook.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Facebook />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://t.me'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.TG />
									</ButtonBase>
									<ButtonBase
										component='a'
										href='https://discord.com'
										target='_blank'
										color='primary'
										sx={iconButtonStyles}
									>
										<Icons.Discord />
									</ButtonBase>
								</Box>
							)}
						</Box>
						<Box sx={{ flex: 1, textAlign: 'center', order: isMobile ? '0' : '1' }}>
							<img
								src={isMobile ? shitMob : shitImg}
								alt='Tap Swap'
								style={{ width: '100%', borderRadius: '16px' }}
							/>
						</Box>
						{isMobile && (
							<Box sx={{ display: 'flex', gap: 2, marginTop: '24px' }}>
								<ButtonBase
									component='a'
									href='https://www.facebook.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Facebook />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://t.me'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.TG />
								</ButtonBase>
								<ButtonBase
									component='a'
									href='https://discord.com'
									target='_blank'
									color='primary'
									sx={iconButtonStyles}
								>
									<Icons.Discord />
								</ButtonBase>
							</Box>
						)}
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Projects;
