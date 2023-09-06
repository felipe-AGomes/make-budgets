type MaterialData = {
	id: string;
	name: string;
	unit: string;
	priceIn: string;
	works: WorkData[];
};

type WorkData = {
	id: string;
	name: string;
	unit: string[];
};
