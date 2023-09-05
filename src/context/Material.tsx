import { Dispatch, SetStateAction, createContext } from 'react';
import { useState } from 'react';

type MaterialType = {
	material: MaterialData[] | null;
	setMaterial: Dispatch<SetStateAction<MaterialData[] | null>>;
};

export const MaterialContext = createContext<MaterialType>({
	material: [],
	setMaterial: () => {},
});

export default function MaterialContextProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [material, setMaterial] = useState<MaterialData[] | null>(null);

	return (
		<MaterialContext.Provider value={{ material, setMaterial }}>
			{children}
		</MaterialContext.Provider>
	);
}
