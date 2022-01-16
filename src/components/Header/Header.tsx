import React, {
	useState
} from 'react';

const Header = (props: any) => {
	const [header, setHeader] = useState<boolean>(false);
	const body = document.body;

	const changeHeaderColor = () => {
		if (body?.scrollTop >= 1) {
			setHeader(true)
		} else {
			setHeader(false)
		};
	};

	body?.addEventListener('scroll', changeHeaderColor);

	return (
		<header className={header ? 'cover-header' : 'scroll-header'}>
			{props.children}
		</header>
	);
}

export default Header