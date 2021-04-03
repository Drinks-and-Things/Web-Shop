import React from 'react';
import Link from 'next/link';
import { packages } from '@lib/routes';

export default function Shop() {
	return (
		<>
			<h6 className='text-uppercase font-weight-bold mb-4'>Shop</h6>
			<ul className='list-unstyled mb-0'>
				<li className='mb-2'>
					<Link href={packages}>
						<a className='text-muted'>Packages</a>
					</Link>
				</li>
				<li className='mb-2'>
					<Link href={packages}>
						<a className='text-muted'>Drinks</a>
					</Link>
				</li>
				<li className='mb-2'>
					<Link href={packages}>
						<a className='text-muted'>Shisha</a>
					</Link>
				</li>
				<li className='mb-2'>
					<Link href={packages}>
						<a className='text-muted'>Playstation</a>
					</Link>
				</li>
			</ul>
		</>
	);
}
