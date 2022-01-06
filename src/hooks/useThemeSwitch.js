import { 
	useEffect, 
	useState 
} from 'react';

export const useThemeSwitch = () => {
	const [theme, setTheme] = useState('main');
	const [componentMounted, setComponentMounted] = useState(false);
	const setMode = (mode) => {
		window.localStorage.setItem('theme', mode);
		setTheme(mode);
	};

	const toggleTheme = () => {
		theme === 'main'
			? setMode('alternative')
			: setMode('main');
	};

	useEffect(() => {
		const localTheme = window.localStorage.getItem('theme');
		window.matchMedia &&
			window.matchMedia('(prefers-color-scheme: main)').matches &&
			!localTheme
			? setMode('alternative')
			: localTheme
				? setTheme(localTheme)
				: setMode('main');
		setComponentMounted(true);
	}, []);

	return [theme, toggleTheme, componentMounted];
};

export default useThemeSwitch;