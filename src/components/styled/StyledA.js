import styled from 'styled-components';

export const StyledNavItem = styled.a`
	font-size: 2rem;
	color: ${({ theme }) => theme.color15};
	padding: 0.5em;
	justify-content: middle;
	align-items: center;
	
	&:hover,
	&:focus {
		color: ${({ theme }) => theme.color14};
	}

	&:last-child {
		margin-left: auto;
	}
`;