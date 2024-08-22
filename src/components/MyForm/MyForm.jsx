import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useTheme, useMediaQuery } from '@mui/material';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, ButtonBase } from '@mui/material';
import formCover from '../../img/formCover.png';
import Popup from '../Popup/Popup';
import Icons from '../Icons/Icons.jsx';

// Validation schema
const validationSchema = Yup.object({
	name: Yup.string()
		.required('Name is required')
		.min(2, 'Name must be at least 2 characters long'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	phone: Yup.string(), // Remove validation for phone
	message: Yup.string(), // Remove validation for message
});

const MyForm = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down('1280'));
	const [isPopupOpen, setIsPopupOpen] = useState(false);

	const formCoverStyles = {
		position: 'absolute',
		top: 450,
		left: isMobile ? '-16px' : '-66px',
		width: '100%',
		height: '100%',
		opacity: '1',
	};

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
			backgroundColor: 'rgba(10, 14, 53, 0.4)',
			transition: '.25s',
		},
	};

	const handleFormSubmit = (values, { resetForm }) => {
		console.log('Form Data', values);
		resetForm();
		setIsPopupOpen(true);
	};

	const closePopup = () => {
		setIsPopupOpen(false);
	};

	return (
		<>
			<Formik
				initialValues={{
					name: '',
					email: '',
					phone: '',
					message: '',
				}}
				validationSchema={validationSchema}
				onSubmit={handleFormSubmit}
			>
				{({ errors, touched }) => (
					<>
						<Form
							id='form'
							style={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								marginTop: isMobile ? '89px' : '178px',
								position: 'relative',
							}}
						>
							<Box
								sx={{
									display: 'flex',
									flexDirection: 'column',
									alignItems: 'center',
									borderRadius: '24px',
									maxWidth: isMobile ? '358px' : '765px',
									margin: isMobile ? '0 16px' : '0 auto',
									padding: isMobile ? '32px 21px 47px' : '63px 104px 56px',
									backgroundColor: '#fff',
									zIndex: 1,
								}}
							>
								<Typography
									variant='h4'
									gutterBottom
									sx={{
										fontWeight: 700,
										fontSize: isMobile ? '46px' : '74px',
										marginBottom: '48px',
										lineHeight: '116%',
										letterSpacing: '-0.06em',
										textTransform: 'capitalize',
										textAlign: 'center',
										color: '#000',
									}}
								>
									Work with Us
								</Typography>
								<Typography
									variant='body1'
									gutterBottom
									sx={{
										fontWeight: 400,
										fontSize: '20px',
										lineHeight: '160%',
										textAlign: 'center',
										marginBottom: '48px',
										color: '#000',
									}}
								>
									Fill in the form below to send us a message.
								</Typography>

								<Box sx={{ width: '100%', marginBottom: '47px' }}>
									<Field
										name='name'
										as={TextField}
										label='Name'
										placeholder='ENTER YOUR NAME'
										fullWidth
										variant='outlined'
										error={touched.name && Boolean(errors.name)}
										helperText={<ErrorMessage name='name' />}
										InputLabelProps={{
											sx: {
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '100%',
												textTransform: 'uppercase',
												color: '#0e0b3d',
											},
										}}
										InputProps={{
											sx: {
												border: '1.50px solid #b3b8d0',
												borderRadius: '12px',
												'&::placeholder': {
													fontWeight: 400,
													fontSize: '16px',
													lineHeight: '100%',
													textTransform: 'uppercase',
													textAlign: 'center',
													color: '#b3b8d0',
												},
											},
										}}
									/>
								</Box>

								<Box sx={{ width: '100%', marginBottom: '47px' }}>
									<Field
										name='email'
										as={TextField}
										label='Email'
										placeholder='ENTER YOUR EMAIL'
										fullWidth
										variant='outlined'
										error={touched.email && Boolean(errors.email)}
										helperText={<ErrorMessage name='email' />}
										InputLabelProps={{
											sx: {
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '100%',
												textTransform: 'uppercase',
												color: '#0e0b3d',
											},
										}}
										InputProps={{
											sx: {
												border: '1.50px solid #b3b8d0',
												borderRadius: '12px',
												'&::placeholder': {
													fontWeight: 400,
													fontSize: '16px',
													lineHeight: '100%',
													textTransform: 'uppercase',
													textAlign: 'center',
													color: '#b3b8d0',
												},
											},
										}}
									/>
								</Box>

								<Box sx={{ width: '100%', marginBottom: '47px' }}>
									<Field
										name='phone'
										as={TextField}
										label='Phone Number'
										placeholder='ENTER YOUR PHONE NUMBER'
										fullWidth
										variant='outlined'
										error={touched.phone && Boolean(errors.phone)}
										helperText={<ErrorMessage name='phone' />}
										InputLabelProps={{
											sx: {
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '100%',
												textTransform: 'uppercase',
												color: '#0e0b3d',
											},
										}}
										InputProps={{
											sx: {
												border: '1.50px solid #b3b8d0',
												borderRadius: '12px',
												'&::placeholder': {
													fontWeight: 400,
													fontSize: '16px',
													lineHeight: '100%',
													textTransform: 'uppercase',
													textAlign: 'center',
													color: '#b3b8d0',
												},
											},
										}}
									/>
								</Box>

								<Box sx={{ width: '100%', marginBottom: '47px' }}>
									<Field
										name='message'
										as={TextField}
										label='Message'
										placeholder='TYPE YOUR TEXT'
										fullWidth
										multiline
										rows={4}
										variant='outlined'
										error={touched.message && Boolean(errors.message)}
										helperText={<ErrorMessage name='message' />}
										InputLabelProps={{
											sx: {
												fontWeight: 400,
												fontSize: '16px',
												lineHeight: '100%',
												textTransform: 'uppercase',
												color: '#0e0b3d',
											},
										}}
										InputProps={{
											sx: {
												border: '1.50px solid #b3b8d0',
												borderRadius: '12px',
												'&::placeholder': {
													fontWeight: 400,
													fontSize: '16px',
													lineHeight: '100%',
													textTransform: 'uppercase',
													textAlign: 'center',
													color: '#b3b8d0',
												},
											},
										}}
									/>
								</Box>

								<Button
									type='submit'
									variant='contained'
									fullWidth
									sx={{
										borderRadius: '44px',
										padding: '21px',
										width: '185px',
										fontWeight: '700',
										fontSize: '16px',
										lineHeight: '100%',
										textTransform: 'uppercase',
										textAlign: 'center',
										color: '#0e0b3d',
										backgroundColor: '#c8ff80',
										'&:hover': {
											color: '#fff',
										},
									}}
								>
									Send
								</Button>
							</Box>
							<img src={formCover} alt='Form Cover' style={formCoverStyles} />
						</Form>

						<Box sx={{ marginTop: 4, textAlign: 'center' }} id='social'>
							<Typography
								variant='h6'
								gutterBottom
								sx={{
									fontWeight: 700,
									fontSize: isMobile ? '32px' : '44px',
									lineHeight: '105%',
									letterSpacing: '-0.06em',
									textTransform: 'capitalize',
									textAlign: 'center',
									color: '#fff',
									marginTop: isMobile ? '72px' : '112px',
									marginBottom: '24px',
								}}
							>
								Our Social Networks
							</Typography>
							<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
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
						</Box>
					</>
				)}
			</Formik>

			{/* Add the Popup component */}
			<Popup open={isPopupOpen} onClose={closePopup} />
		</>
	);
};

export default MyForm;
