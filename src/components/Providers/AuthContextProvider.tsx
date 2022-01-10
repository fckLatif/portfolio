import React, {
	FC
} from 'react';
import {
	authContext
} from '../../context';

interface AuthContextProviderProps {
	value: any;
}

const AuthContextProvider: FC<AuthContextProviderProps> = (props) => {
	return (
		<>
			<authContext.Provider value={props.value}>
				{props.children}
			</authContext.Provider>
		</>
	);
}

export default AuthContextProvider