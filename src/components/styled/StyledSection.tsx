import styled from 'styled-components';

export const StyledChildSection = styled.section`
	width: 96%;
	display: grid;
	gap: 30px;
	grid-template-columns: repeat(12,1fr);
	grid-column-gap: 15px;
	grid-row-gap: 40px;
	margin: 0 auto 40px;

	@media screen and (min-width: 646px) {
		width: 88%;
	}

	.project {
		grid-column: auto/span 6;
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-weight: 700;
		justify-content: space-between;

		color: ${({ theme }) => theme.color04};
		background: none;
		border: 2px solid ${({ theme }) => theme.color04};
		padding: 10px;
		background: ${({ theme }) => theme.color06};

		background: linear-gradient(to left, ${({ theme }) => theme.color06} 50%, ${({ theme }) => theme.color04} 50%) right;
		background-size: 200%;
		transition: background 400ms ease-out;

		h4 {
			margin-block-start: 0;
    		margin-block-end: 0;
			text-transform: capitalize;
			font-size: 18px;
		}

		p {
			margin-block-start: 0;
    		margin-block-end: 0;

			&::first-letter {
				text-transform: capitalize;
			}
		}

		a {
			text-decoration: none;
			text-transform: capitalize;
			color: ${({ theme }) => theme.color06};
			width: fit-content;
			padding: 0.5em 1em;

			background: linear-gradient(to left, ${({ theme }) => theme.color04} 50%, ${({ theme }) => theme.color06} 50%) right;
			background-size: 200%;
			transition: 300ms ease-out;
		}

		&:hover,
		&:focus-within {
			color: ${({ theme }) => theme.color06};
			background-position: left;

			a {
				color: ${({ theme }) => theme.color05};
				background-position: left;
			}
		}
	}

	.project-buttons {
		display: flex;
		flex-direction: column;
		gap: 10px;
		margin-top: auto;

		@media screen and (min-width: 585px) {
			flex-direction: row;
		}
	}
`;

export const StyledSection = styled.section`
	z-index: 1;
	position: relative;
	display: grid;
	place-items: center;

	h2 {
		text-align: center;
		color: ${({ theme }) => theme.color01};
	}

	header {
		width: 100%;
		line-height: 50px;
		top: 0;
		z-index: 20;
	}

	.cover-header {
		position: sticky;
	}

	.cover-header {
		background: ${({ theme }) => theme.color06};
		color: ${({ theme }) => theme.color01};
		transition: background-color 1s linear;
	}

	.scroll-header {
		position: relative;
		background: ${({ theme }) => theme.color04};
		color: ${({ theme }) => theme.color06};
	}

	.project-page {
		width: 100%;

		${StyledChildSection} {
			width: 54%;

			@media screen and (max-width: 1200px) {
				width: 73%;
			}
		}

		.project {
			grid-column: auto/span 12;
		}
	}
`;