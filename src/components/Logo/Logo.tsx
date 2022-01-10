import React, { FC } from 'react';
import { StyledLogo } from '../styled/StyledH1';

interface LogoProps {
	content: String;
}

export const Logo: FC<LogoProps> = (props) => {
	return (
		<StyledLogo>{props.content}</StyledLogo>
	);
}