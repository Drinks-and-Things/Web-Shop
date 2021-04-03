import React from 'react';
import Link from 'next/link';
import Head from '@components/Head';
import s from '@styles/404.module.scss';

export default function Custom404() {
	return (
		<>
			<Head title='404 Page'>
				<link
					href='https://fonts.googleapis.com/css?family=Monoton'
					rel='stylesheet'
					type='text/css'
				/>
			</Head>
			<div className={s.page404}>
				<p id='error'>
					E<span>r</span>ror
				</p>
				<p id='code'>
					4<span>0</span>
					<span>4</span>
				</p>
				<h2>Die gewünschte Seite gibt es leider nicht</h2>
				<Link href='/'>
					<a className={s.home__link}>Zur Startseite zurück &gt;</a>
				</Link>
			</div>
		</>
	);
}

export async function getStaticProps() {
	return {
		props: {},
	};
}
