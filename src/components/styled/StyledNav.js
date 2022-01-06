import styled from 'styled-components';

export const StyledNavMobile = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 270px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 10px 15px;
	background: ${({ theme }) => theme.color06};
	color: ${({ theme }) => theme.color01};

	z-index: 0;

	.nav-item {
		color: inherit;
		background: none;
		outline: none;
		border: none;
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		font-size: 12px;
		padding: 8px 0;
		border-bottom: 1px solid white;
		
		&:focus-visible {
			color: ${({ theme }) => theme.color04};
		}
	}

	.nav-icon {
		width: 20px;
	}

	.nav-content {
		visibility: visible;
		margin-left: 10px;
		letter-spacing: 4px;
		user-select: none;
	}
`;

export const StyledNav = styled.nav`
	position: relative;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
	padding: 10px;
	background: ${({ theme }) => theme.color04};
	color: ${({ theme }) => theme.color06};

	.main-nav {
		display: none;
	}

	.nav-item {
		color: inherit;
		background: none;
		outline: none;
		border: none;
		text-decoration: none;
		text-transform: uppercase;
		cursor: pointer;
		margin: 0 auto;
		font-size: 18px;
		font-weight: 700;
		width: fit-content;

		&:first-child {
			margin: 0;
		}

		&:last-child {
			margin: 0 0 0 auto;
		}

		&:focus-visible {
			outline: 2px solid ${({ theme }) => theme.color06};
		}
	}

	.nav-content {
		visibility: visible;
		letter-spacing: 6px;
		user-select: none;
	}

	.nav-icon {
		display: none;
	}

	@media screen and (min-width: 980px) {
		grid-template-columns: repeat(12, 1fr)!important;

		.main-nav {
			padding-left: 20px;
			grid-column: auto/span 9;
			display: block;
		}

		.nav-item {
			font-size: 26px;
			padding: 0 15px 0 0;
		}

		.opener {
			display: none;
		}

		.nav-logo {
			grid-column: auto/span 2;
			margin: 0 10px;
		}
	}
`;