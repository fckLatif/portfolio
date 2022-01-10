import styled from 'styled-components';

export const StyledForm = styled.div`
	padding: 0 40px;
	width: 100%;

	h2 {
		font-weight: 400;
    	font-size: 20px;
	}

	label {
		display: block;
		font-weight: 700;
		font-size: 12px;
		margin-bottom: 5px;
		text-transform: capitalize;
		color: ${({ theme }) => theme.color05};
	}

	input[type='email'],
	input[type='password'] {
		width: 100%;
		border: 1px solid ${({ theme }) => theme.color06};
		height: 48px;
		line-height: 48px;
		padding: 0;
		margin: 0;
		margin-bottom: 20px;
		max-width: 100%;
		text-indent: 17px;
		outline: 0;
		border-radius: 2px;
		font-size: 12px;
		font-family: Glegoo;
		color: ${({ theme }) => theme.color03};
		background: ${({ theme }) => theme.color01};
	}

	input[type='submit'] {
		width: 100%;
		max-width: 100%;
		background: ${({ theme }) => theme.color03};
		border: none;
		transition: background .3s ease, color .3s ease;
		-webkit-appearance: none;
		color: ${({ theme }) => theme.color06};
		display: inline-block;
		font-family: Glegoo !important;
		font-weight: 400;
		font-size: 12px !important;
		text-decoration: none;
		cursor: pointer;
		margin-bottom: 20px;
		line-height: normal;
		height: 48px;
		line-height: 48px;

		&:hover {
			background: ${({ theme }) => theme.color05};
		}
	}

	@media screen and (min-width: 980px) {
		width: 40%;
	}
`;