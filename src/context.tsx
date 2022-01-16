import { createContext } from 'react';

interface AuthContextProps {
	isAuth: boolean;
}

interface ThemeContextProps {
	theme: string;
	toggleTheme: (() => void);
	componentMounted: boolean;
}

interface ProjectsContextProps {
	projects: any[];
}

export const themeContext = createContext({} as ThemeContextProps);
export const authContext = createContext({} as AuthContextProps);
export const projectsContext = createContext({} as ProjectsContextProps)