import { useState } from 'react';
import DropDown from '../DropDown';
import useMaterialContext from '@/hooks/useMaterialContext';

export default function Material() {
	const {material} = useMaterialContext()
	const [selectedMaterial, setSelectedMaterial] = useState<MaterialData | null>(null);
	const [selectedWork, setSelectedWork] = useState<WorkData | null>(null);

	return (
		<>
			<DropDown
				options={material}
				title={'Material'}
				setOption={setSelectedMaterial}
			/>
			{selectedMaterial && (
				<DropDown
					options={selectedMaterial.works}
					title={'Trabalho'}
					setOption={setSelectedWork}
				/>
			)}
		</>
	);
}
