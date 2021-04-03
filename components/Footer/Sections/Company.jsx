import React from 'react';
import Link from 'next/link';
import Header from '../Header';
import Text from '../Text';
import { agb } from '@utils/lib/routes';

export default function Company() {
	return (
		<>
			<Header>Unternehmen</Header>
			<ul className='list-unstyled mb-0'>
				{/* <Text>
					<Link href='/kontakt' prefetch={false}>
						<a>Kontakt</a>
					</Link>
				</Text> */}
				<Text>
					<Link href='/impressum' prefetch={false}>
						<a>Impressum</a>
					</Link>
				</Text>
				<Text>
					<Link href={agb}>
						<a>Geschäftsbedingungen</a>
					</Link>
				</Text>
			</ul>
		</>
	);
}
