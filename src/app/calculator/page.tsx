import S from './Calculator.module.css';
import Header from '@/components/Header';

export default function Calculator() {
	return (
		<main className={S.calculator}>
			<Header />
			<div className={S.title}>
				<h1>Calculadora de material</h1>
				{/* <BackButton /> */}
			</div>
		</main>
	);
}
