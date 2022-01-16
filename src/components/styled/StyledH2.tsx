import styled from "styled-components";

export const StyledPageTitle = styled.h2`
	font-size: 23px;
	font-family: ${({ theme }) => theme.font03};
	text-transform: uppercase;
	letter-spacing: 6px;
	font-weight: 400;

	padding: 40px 0;
	margin-block-start: 0;
    margin-block-end: 0;
`;