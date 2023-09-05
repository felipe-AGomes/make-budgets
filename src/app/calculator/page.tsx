'use client';

import BackButton from '@/components/BackButton';
import S from './Calculator.module.css';
import Header from '@/components/Header';
import Material from '@/components/Material';
import useMaterialContext from '@/hooks/useMaterialContext';

export default function Calculator() {
	const { setMaterial } = useMaterialContext();
	const materialTest = [
		{
			name: 'Cimento',
			unit: 'Kg 50',
			priceIn: 'Kg',
			works: [
				{ name: 'Reboco', unit: ['M²', 'MM'] },
				{ name: 'Contra Piso', unit: ['M²', 'MM'] },
				{ name: 'Assentamento de Tijolo', unit: ['M²', 'MM'] },
			],
		},
		{
			name: 'Areia Grossa',
			unit: 'Kg 20',
			priceIn: 'Kg',
			works: [
				{ name: 'Contra Piso', unit: ['M²', 'MM'] },
				{ name: 'Reboco', unit: ['M²', 'MM'] },
				{ name: 'Assentamento de Tijolo', unit: ['M²'] },
			],
		},
		{
			name: 'AC3',
			unit: 'Kg 20',
			priceIn: 'Kg',
			works: [{ name: 'Assentamento de Porcelanato', unit: ['M²'] }],
		},
		{
			name: 'AC2',
			unit: 'Kg 20',
			priceIn: 'Kg',
			works: [{ name: 'Assentamento de Cerâmica', unit: ['M²'] }],
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
