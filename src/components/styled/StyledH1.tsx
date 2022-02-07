import styled from 'styled-components';

export const StyledLogo = styled.h1`
	font-family: ${({ theme }) => theme.font02};
	color: ${({ theme }) => theme.color04};
	font-weight: 400;
	margin-block-start: 0;
    margin-block-end: 0;
	font-size: 62px;
	width: 100px;
	letter-spacing: 2px;
	padding: 10px 0;
	font-weight: 400;
`;