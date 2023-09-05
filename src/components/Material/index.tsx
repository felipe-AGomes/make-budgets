import { useState } from 'react';
import DropDown from '../DropDown';

export default function Material() {
	const [material, setMaterial] = useState<string | null>(null);
	const [work, setWork] = useState<string | null>(null);

	return (
		<>
			<DropDown
				options={['Cimento', 'Areia', 'Brita']}
				title={'Material'}
				setOption={setMaterial}
			/>
			{material && (
				<DropDown
					options={['Reboco', 'Contra Piso', 'Assentamento']}
					title={'Trabalho'}
					setOption={setWork}
				/>
			)}
		</>
	);
}
