import React, {
	useEffect,
	FC
} from 'react';

import { StyledChildSection } from '../styled/StyledSection';

interface ChildSectionProps {
	className?: string;
}

const ChildSection: FC<ChildSectionProps> = (props) => {

	useEffect(() => {
		document.querySelector(`${StyledChildSection}`)?.classList.remove('aos-animate');

		setTimeout(() => {
			document.querySelector(`${StyledChildSection}`)?.classList.add('aos-animate');
		}, 500);
	}, [])

	return (
		<>
			<StyledChildSection
				className={`aos-init aos-animate`}
				data-section-id='1562608288641'
				data-aos='fade-up'
				data-aos-easing='ease'
				data-aos-duration='400'
				data-section-type='carousel-section'>
				{props.children}
			</StyledChildSection>
		</>
	)
}

export default ChildSection