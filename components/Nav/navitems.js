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
	beer,
	spirituosen,
	wine,
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
			{ href: beer, title: 'Bier' },
			{ href: spirituosen, title: 'Spirituosen' },
			{ href: wine, title: 'Wein/Sekt/Aperitif' },
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
