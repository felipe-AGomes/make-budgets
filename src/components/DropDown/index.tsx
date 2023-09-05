import { Dispatch, SetStateAction, useState } from 'react';
import S from './DropDown.module.css';
import { IoIosArrowDown } from 'react-icons/io';

type Props = {
	title: string;
	options: string[];
	setOption: Dispatch<SetStateAction<string | null>>;
};

export default function DropDown({ title, options, setOption }: Props) {
	const [optionDisplay, setOptionDisplay] = useState('none');
	const [material, setMaterial] = useState<string | null>(null);
	const handleOptionDisplay = () => {
		optionDisplay === 'flex'
			? setOptionDisplay('none')
			: setOptionDisplay('flex');
	};

	return (
		<div className={S.material}>
			<div className={S.dropBox}>
				<p>{title}</p>
				<div className={S.selectContain}>
					<div
						className={S.selectInput}
						onClick={handleOptionDisplay}
					>
						<p>{material}</p>
					</div>
					<div
						className={S.optionButtonContain}
						onClick={handleOptionDisplay}
					>
						<IoIosArrowDown
							size={20}
							className={
								optionDisplay === 'flex' ? S.optionButtonTop : S.optionButtonDown
							}
						/>
					</div>
				</div>
				<div
					className={S.options}
					style={{ display: optionDisplay }}
				>
					{options.map((option) => {
						return (
							<div
								key={option}
								onClick={() => {
									setMaterial(option);
									setOption(option);
									handleOptionDisplay();
								}}
							>
								<p>{option}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
