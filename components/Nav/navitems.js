import {
	// contact,
	// playstation,
	home,
	packages,
	shisha,
	snacks,
	entertainment,
	alkDrinks,
	alkFreeDrinks,
} from '@lib/routes';

import {
	// PlaystationIcon,
	HomeIcon,
	ShishsaIcon,
	SodaDrink,
	ChipsCookiesIcon,
	ControllerIcon,
	DiskoballIcon,
} from '../Icons';

export const navItems = [
	{
		href: home,
		icon: HomeIcon,
		child: 'Startseite',
	},
	{
		href: packages,
		icon: DiskoballIcon,
		child: 'Packages',
	},
	{
		type: 'Dropdown',
		icon: SodaDrink,
		child: 'Drinks',
		items: [
			{ href: alkDrinks, title: 'Alk Getränke' },
			{ href: alkFreeDrinks, title: 'Alkoholfreie Getränke' },
		],
	},
	{
		href: snacks,
		icon: ChipsCookiesIcon,
		child: 'Snacks',
	},
	{
		href: shisha,
		icon: ShishsaIcon,
		child: 'Shisha',
	},
	{
		href: entertainment,
		icon: ControllerIcon,
		child: 'Entertainment',
	},
];

// export const entertainmentItems = [
// 	{
// 		href: playstation,
// 		item: PlaystationIcon,
// 		child: 'Playstation',
// 	},
// 	{
// 		href: contact,
// 		item: ShishsaIcon,
// 		child: 'Bier Pong',
// 	},
// ];
