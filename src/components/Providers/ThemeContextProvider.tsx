import React, {
	FC
} from 'react';
import {
	themeContext
} from '../../context';

interface ThemeContextProviderProps {
	value: any;
	theme?: string;
}

const ThemeContextProvider: FC<ThemeContextProviderProps> = (props) => {
	return (
		<>
			<themeContext.Provider value={props.value}>
				{props.children}
			</themeContext.Provider>
		</>
	);
}

export default ThemeContextProvider