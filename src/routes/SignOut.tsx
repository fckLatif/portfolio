import {
	signOut
} from 'firebase/auth';
import { auth } from '../firebase';
import React, {
	useEffect
} from 'react';

import { Navigate } from 'react-router-dom';



export const SignOut = () => {
	useEffect(() => {
		doSignOut();
	  }, []);

	const doSignOut = async () => {
		await signOut(auth);
	};

	return <Navigate to='/signin' />;
}

export default SignOut