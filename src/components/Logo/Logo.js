import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { MainTheme } from '../Themes/MainTheme';
import { DarkTheme } from '../Themes/DarkTheme';

const StyledLogo = styled.h1`
	text-transform: uppercase;

	color: ${props => props.theme.green01};
`;

export const Logo = (props) => {
	return (
		<ThemeProvider theme={MainTheme}>
			<StyledLogo>{props.text}</StyledLogo>
		</ThemeProvider>
	);
}