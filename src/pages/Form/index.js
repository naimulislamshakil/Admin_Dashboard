import { Box, Button, TextField, useMediaQuery, useTheme } from '@mui/material';
import { Formik, useFormik } from 'formik';
import React from 'react';
import Header from '../../components/Header';
import { tokens } from '../../thems';
import * as yup from 'yup';

const initialValues = {
	firstName: '',
	lastName: '',
	email: '',
	contact: '',
	address1: '',
	address2: '',
};

const phoneRegExp =
	/^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
	firstName: yup.string().required('required'),
	lastName: yup.string().required('required'),
	email: yup.string().email('Invalid Email').required('required'),
	contact: yup
		.string()
		.matches(phoneRegExp, 'Phone Number is Not Valid')
		.required('required'),
	address1: yup.string().required('required'),
	address2: yup.string(),
});

const Form = () => {
	const isNonMobile = useMediaQuery('(min-width:600px)');
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const { values, touched, handleBlur, handleChange, handleSubmit, errors } =
		useFormik({
			initialValues,
			validationSchema: userSchema,
			onSubmit: (values) => {
				console.log(values);
			},
		});
	return (
		<Box m="20px">
			<Header title="CREATE USER" subTitle="Create a New User Profiles." />

			<form onSubmit={handleSubmit}>
				<Box
					mt="20px"
					display="grid"
					gap="30px"
					gridTemplateColumns="repeat(4, minmax(0, 1fr))"
					sx={{
						'& > div': { gridColumn: isNonMobile ? undefined : 'span 4' },
					}}
				>
					<TextField
						fullWidth
						color="secondary"
						id="outlined-basic"
						variant="outlined"
						type="text"
						label="First Name"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.firstName}
						name="firstName"
						error={!!touched.firstName && !!errors.firstName}
						helperText={touched.firstName && errors.firstName}
						sx={{ gridColumn: 'span 2' }}
					/>
					<TextField
						fullWidth
						color="secondary"
						id="outlined-basic"
						variant="outlined"
						type="text"
						label="Last Name"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.lastName}
						name="lastName"
						error={!!touched.lastName && !!errors.lastName}
						helperText={touched.lastName && errors.lastName}
						sx={{ gridColumn: 'span 2' }}
					/>
					<TextField
						fullWidth
						color="secondary"
						variant="outlined"
						type="text"
						label="Email"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.email}
						name="email"
						error={!!touched.email && !!errors.email}
						helperText={touched.email && errors.email}
						sx={{ gridColumn: 'span 4' }}
					/>
					<TextField
						fullWidth
						color="secondary"
						variant="outlined"
						type="text"
						label="Contact Number"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.contact}
						name="contact"
						error={!!touched.contact && !!errors.contact}
						helperText={touched.contact && errors.contact}
						sx={{ gridColumn: 'span 4' }}
					/>
					<TextField
						fullWidth
						color="secondary"
						variant="outlined"
						type="text"
						label="Address 1"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.address1}
						name="address1"
						error={!!touched.address1 && !!errors.address1}
						helperText={touched.address1 && errors.address1}
						sx={{ gridColumn: 'span 4' }}
					/>
					<TextField
						fullWidth
						color="secondary"
						variant="outlined"
						type="text"
						label="Address 2"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.address2}
						name="address2"
						error={!!touched.address2 && !!errors.address2}
						helperText={touched.address2 && errors.address2}
						sx={{ gridColumn: 'span 4' }}
					/>
				</Box>

				<Box display="flex" justifyContent="end" mt="20px">
					<Button type="submit" color="secondary" variant="contained">
						Create New User
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default Form;
