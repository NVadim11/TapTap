import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography, ButtonBase } from '@mui/material';
import Icons from '../Icons/Icons.jsx';

const validationSchema = Yup.object({
	name: Yup.string()
		.required('Name is required')
		.min(2, 'Name must be at least 2 characters long'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	phone: Yup.string()
		.required('Phone number is required')
		.matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits long'),
	message: Yup.string()
		.required('Message is required')
		.min(10, 'Message must be at least 10 characters long'),
});

const MyForm = () => {
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
		<Formik
			initialValues={{
				name: '',
				email: '',
				phone: '',
				message: '',
			}}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				console.log('Form Data', values);
			}}
		>
			{({ errors, touched }) => (
				<>
					<Form id='form'>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								borderRadius: '24px',
								maxWidth: '865px',
								margin: '0 auto',
								padding: '63px 104px 56px',
								backgroundColor: '#fff',
							}}
						>
							<Typography
								variant='h4'
								gutterBottom
								sx={{
									fontWeight: 700,
									fontSize: '74px',
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
								}}
							>
								Send
							</Button>
						</Box>
					</Form>
					<Box sx={{ marginTop: 4, textAlign: 'center' }} id='social'>
						<Typography
							variant='h6'
							gutterBottom
							sx={{
								fontWeight: 700,
								fontSize: '44px',
								lineHeight: '105%',
								letterSpacing: '-0.06em',
								textTransform: 'capitalize',
								textAlign: 'center',
								color: '#fff',
								marginTop: '112px',
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
	);
};

export default MyForm;
