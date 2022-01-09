import {
	signOut
} from 'firebase/auth';
import { auth } from '../firebase';

import { Navigate } from 'react-router-dom';

const doSignOut = async () => {
	await signOut(auth);
};

export const SignOut = () => {
	return doSignOut() && <Navigate to='/signin' />
}

export default SignOut