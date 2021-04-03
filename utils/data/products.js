const dummyProducts = [
	{
		id: 1,
		name: 'Buffalo - Striploin',
		price: '39.11',
		photo: '/img/1.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 2,
		name: 'Bacardi Breezer - Tropical',
		price: 257.92,
		photo: '/img/2.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 3,
		name: 'Wine - Gato Negro Cabernet',
		price: 51.01,
		photo: '/img/3.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 4,
		name: 'Cabbage - Nappa',
		price: 250.9,
		photo: '/img/4.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 5,
		name: 'Sping Loaded Cup Dispenser',
		price: 175.85,
		photo: '/img/5.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 6,
		name: 'Bread - Malt',
		price: 82.61,
		photo: '/img/6.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 7,
		name: 'Glass Clear 8 Oz',
		price: 201.1,
		photo: '/img/7.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 8,
		name: 'Sour Puss Raspberry',
		price: 134.99,
		photo: '/img/8.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 9,
		name: 'Pork - Chop, Frenched',
		price: 199.16,
		photo: '/img/9.jpg',
		brand: 'kelly-s',
		instock: false,
	},
	{
		id: 10,
		name: 'Bagels Poppyseed',
		price: 123.82,
		photo: '/img/10.jpg',
		brand: 'kelly-s',
		instock: true,
	},
	{
		id: 11,
		name: 'Sour Puss Raspberry',
		price: 134.99,
		photo: '/img/8.jpg',
		brand: 'kelly-s',
		instock: true,
	},
];

export const getProducts = () => {
	return new Promise((resolve) => {
		resolve(dummyProducts);
	});
};
