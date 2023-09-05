type MaterialData = {
	name: string;
	unit: string;
	priceIn: string;
	works: WorkData[];
};

type WorkData = {
	name: string;
	unit: string[];
};
