import { MaterialContext } from '@/context/Material';
import { useContext } from 'react';

export default function useMaterialContext() {
	const context = useContext(MaterialContext);
	if (!context) throw new Error('MaretialContext está fora do contexto');
	return context;
}
