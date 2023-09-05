import S from './BackButton.module.css';

import { IoMdArrowBack } from 'react-icons/io';

export default function BackButton() {
	return (
		<div className={S.arrowContain}>
			<IoMdArrowBack size={20} />
		</div>
	);
}
