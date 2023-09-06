'use client';

import BackButton from '@/components/BackButton';
import S from './Calculator.module.css';
import Header from '@/components/Header';
import Material from '@/components/Material';
import useMaterialContext from '@/hooks/useMaterialContext';

export default function Calculator() {
	const { setMaterial } = useMaterialContext();
	const materialTest: MaterialData[] = [
		{
			id: '1',
			name: 'Cimento',
			unit: 'Kg 50',
			priceIn: 'Kg',
			works: [
				{ id: '1', name: 'Reboco', unit: ['M²', 'MM'] },
				{ id: '2', name: 'Contra Piso', unit: ['M²', 'MM'] },
				{ id: '3', name: 'Assentamento de Tijolo', unit: ['M²', 'MM'] },
			],
		},
		{
			id: '2',
			name: 'Areia Grossa',
			unit: 'Kg 20',
			priceIn: 'Kg',
			works: [
				{ id: '4', name: 'Contra Piso', unit: ['M²', 'MM'] },
				{ id: '5', name: 'Reboco', unit: ['M²', 'MM'] },
				{ id: '6', name: 'Assentamento de Tijolo', unit: ['M²'] },
			],
		},
		{
			id: '3',
			name: 'AC3',
			unit: 'Kg 20',
			priceIn: 'Kg',
			works: [{ id: '7', name: 'Assentamento de Porcelanato', unit: ['M²'] }],
		},
		{
			id: '4',
			name: 'AC2',
			unit: 'Kg 20',
			priceIn: 'Kg',
			works: [{ id: '8', name: 'Assentamento de Cerâmica', unit: ['M²'] }],
		},
	];
	setMaterial(materialTest);

	return (
		<main className={S.calculator}>
			<Header />
			<div className={S.title}>
				<h1>Calculadora de material</h1>
				<BackButton />
			</div>
			<Material />
		</main>
	);
}
