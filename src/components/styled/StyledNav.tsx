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

	.nav-auth {
		display: contents;
	}

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
		margin-left: 10px;
		letter-spacing: 4px;
		user-select: none;
	}

	.slanted {
		transform: rotate(10deg);
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
	min-height: 105px;

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
		letter-spacing: 6px;
		user-select: none;
	}

	.nav-icon {
		display: none;
	}

	.nav-buttons {
		margin-left: auto;
		display: flex;
		gap: 15px;

		.nav-auth {
			display: flex;
			gap: 15px;
		}

		.nav-item {
			&:last-child {
				padding: 0;
			}
		}

		.theme-switcher {
			>svg {
				width: 0.9375em;
			}
		}

		.nav-content {
			display: none;
		}

		.nav-icon {
			display: inline-flex;
			font-size: 26px;
			vertical-align: middle;
		}
	}

	.slanted {
		transform: rotate(10deg);
	}

	@media screen and (min-width: 980px) {
		grid-template-columns: repeat(12, 1fr)!important;

		.main-nav {
			padding-left: 20px;
			grid-column: auto/span 8;
			display: block;

			.nav-auth {
				display: none;
			}

			.nav-item {
				&:last-child {
					display: none;
				}
			}
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

		.nav-buttons {
			grid-column: auto/span 2;
			display: flex;
			gap: 25px;

			.nav-auth {
				display: flex;
				gap: 25px;

				.nav-item {
					&:last-child {
						padding-right: 0;
					}
				}
			}

			.nav-item {
				padding: 0;

				&:last-child {
					padding-right: 25px;
				}
			}
		}
	}
`;