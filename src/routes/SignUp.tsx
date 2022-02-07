import React, {
	useState
} from 'react';
import {
	createUserWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';

import { StyledForm } from '../components/styled/StyledForm';
import { StyledPageTitle } from '../components/styled/StyledH2';

const SignUp = () => {
	const [registerEmail, setRegisterEmail] = useState('');
	const [registerPassword, setRegisterPassword] = useState('');

	const doSignUp = async (e: any) => {
		e.preventDefault();
		await createUserWithEmailAndPassword(
			auth,
			registerEmail,
			registerPassword
		);
	};

	return (
		<>
			<StyledForm onSubmit={doSignUp}>
				<StyledPageTitle>sign up</StyledPageTitle>
				<div id='login_email'>
					<label
						htmlFor='auth_email'
						className='login'
					>email</label>
					<input
						id='auth_email'
						type={'email'}
						name='auth[email]'
						onChange={(event) => {
							setRegisterEmail(event.target.value);
						}} />
				</div>
				<div id='login_password'>
					<label
						htmlFor='auth_password'
						className='login'
					>password</label>
					<input
						id='auth_password'
						type={'password'}
						name='auth[password]'
						onChange={(event) => {
							setRegisterPassword(event.target.value);
						}} />
				</div>
				<div id='login_submit'>
					<input
						type={'submit'}
						value={'Sign Up'}
					/>
				</div>
			</StyledForm>
		</>
	);
}

export default SignUp