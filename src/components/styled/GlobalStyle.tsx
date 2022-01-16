import { createGlobalStyle } from 'styled-components';
import {
	StyledNavMobile,
	StyledNav
} from './StyledNav';
import { StyledSection } from './StyledSection';

export const GlobalStyle = createGlobalStyle`
	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	html,
	body {
		margin: 0;
		padding: 0;
		overflow-x: hidden;
		height: 100%;
	}
	
	html {
		scroll-behavior: smooth;
	}

	body {
		background: ${({ theme }) => theme.color06};
		color: ${({ theme }) => theme.color01};
		font-family: ${({ theme }) => theme.font01};
		-moz-osx-font-smoothing: grayscale;
		position: relative;
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: 100%;

		${StyledNavMobile} {
			transform: translate3D(-270px,0,0);
			opacity: 0;
			pointer-events: none;
			user-select: none;
		}

		${StyledSection} {
			transform: translate3D(0,0,0);
		}

		${StyledSection},
		${StyledNavMobile} {
			transition: all 400ms cubic-bezier(0.46, 0.01, 0.32, 1) 0ms;
		}

		.nav-logo {
			pointer-events: all;
		}

		&.open {
			${StyledNavMobile} {
				transform: translate3D(0,0,0);
				opacity: 1;
				pointer-events: all;
			}

			${StyledNav} {
				.nav-buttons {
					display: none;
				}
			}

			${StyledSection} {
				transform: translate3D(270px,0,0);
			}

			@media screen and (max-width: 441px) {
				.nav-logo {
					pointer-events: none;
					user-select: none;
				}
			}
		}
	}
`;

export default GlobalStyle;