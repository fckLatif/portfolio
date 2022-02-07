import React, {
	useState
} from 'react';
import {
	signInWithEmailAndPassword
} from 'firebase/auth';
import { auth } from '../firebase';

import { StyledForm } from '../components/styled/StyledForm';
import { StyledPageTitle } from '../components/styled/StyledH2';

const SignIn = () => {
	const [loginEmail, setLoginEmail] = useState('');
	const [loginPassword, setLoginPassword] = useState('');

	const doSignIn = async (e: any) => {
		console.log('bingus')
		e.preventDefault();
		await signInWithEmailAndPassword(
			auth,
			loginEmail,
			loginPassword
		);
	}

	return (
		<>
			<StyledForm onSubmit={doSignIn}>
				<StyledPageTitle>sign in</StyledPageTitle>
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
					/>
				</div>
			</StyledForm>
		</>
	);
}

export default SignIn