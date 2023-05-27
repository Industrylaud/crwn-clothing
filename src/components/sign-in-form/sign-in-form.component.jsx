import { useState, useContext } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { UserContext } from '../../context/user.context';

import {
	signInWithGooglePopup,
	signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormfields = {
	email: '',
	password: '',
};

const SignInForm = () => {
	const [formFields, setformFields] = useState(defaultFormfields);
	const { email, password } = formFields;

	const { setCurrentUser } = useContext(UserContext);

	const resetFormFields = () => {
		setformFields(defaultFormfields);
	};

	const signInWithGoogle = async () => {
		const { user } = await signInWithGooglePopup();
		setCurrentUser(user);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);

			setCurrentUser(user);
			resetFormFields();
		} catch (error) {
			if (error.code === 'auth/wrong-password') {
				alert('incorrect password for email');
				return;
			}
			if (error.code === 'auth/user-not-found') {
				alert('no user associted with this email');
				return;
			}
			console.error(error);
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setformFields({ ...formFields, [name]: value });
	};

	return (
		<div className='sign-up-container'>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label='Email'
					type='email'
					required
					onChange={handleChange}
					name='email'
					value={email}
				/>

				<FormInput
					label='Password'
					type='password'
					required
					onChange={handleChange}
					name='password'
					value={password}
				/>

				<div className='buttons-container'>
					<Button type='submit'>Sign In</Button>
					<Button
						type='button'
						buttonType={BUTTON_TYPE_CLASSES.google}
						onClick={signInWithGoogle}
					>
						Google Sign In
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
