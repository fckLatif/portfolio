import { createContext } from "react";

interface AuthProps {
	isAuth: boolean;
}

interface ThemeProps {
	theme: string;
	toggleTheme: (() => void);
	componentMounted: boolean;
}

export const themeContext = createContext({} as ThemeProps);
export const authContext = createContext({} as AuthProps);