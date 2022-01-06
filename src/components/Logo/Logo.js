import { StyledLogo } from '../styled/StyledH1';

export const Logo = (props) => {
	return (
		<StyledLogo>{props.content}</StyledLogo>
	);
}