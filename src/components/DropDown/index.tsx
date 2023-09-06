import { useState } from 'react';
import S from './DropDown.module.css';
import { IoIosArrowDown } from 'react-icons/io';

type Props = {
	title: string;
	options: MaterialData[] | WorkData[] | null;
	setOption: (selectedOption: any) => void;
};

export default function DropDown({ title, options, setOption }: Props) {
	const [optionDisplay, setOptionDisplay] = useState('none');
	const [selected, setSelected] = useState<string | null>(null)

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
						<p>{selected}</p>
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
					{ options && options.map((option) => {
						return (
							<div
								key={option.name}
								onClick={() => {
									setSelected(option.name)
									setOption(option);
									handleOptionDisplay();
								}}
							>
								<p>{option.name}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
