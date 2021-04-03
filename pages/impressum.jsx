import React from 'react';
import Impressum from '../views/Impressum';

const ImpressumPage = () => <Impressum />;

export default Impressum;

export async function getStaticProps() {
	return {
		props: {},
	};
}
