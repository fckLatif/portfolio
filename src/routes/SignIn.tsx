import React, {
	useState
} from 'react';
import {
	signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';

import { StyledForm } from '../components/styled/StyledDiv'

const SignIn = () => {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const doSignIn = async () => {
		await signInWithEmailAndPassword(
			auth,
			loginEmail,
			loginPassword
		);
	}

	return (
		<>
			<StyledForm>
				<h2>Login</h2>
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
							setLoginEmail(event.target.value);
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
							setLoginPassword(event.target.value);
						}} />
				</div>
				<div id='login_submit'>
					<input
						type={'submit'}
						value={'Sign In'}
						onClick={doSignIn}
					/>
				</div>
			</StyledForm>
		</>
	);
}

export default SignIn