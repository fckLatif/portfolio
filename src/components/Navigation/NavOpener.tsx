import {
	useState,
	useEffect,
	FC
} from 'react';

interface NavOpenerProps {
	content: string;
}

const NavOpener: FC<NavOpenerProps> = (props) => {
	const [isOpen, setIsOpen] = useState(false)
	useEffect(() => {
		document.body.classList.toggle('open', isOpen);
	}, [isOpen])

	return (
		<span className='nav-item opener' tabIndex={0} onClick={() => setIsOpen(!isOpen)}>
			<span className='nav-content'>{props.content}</span>
		</span>
	);
}

export default NavOpener