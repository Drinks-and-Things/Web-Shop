import React from 'react';
import { Container } from 'react-bootstrap';

import Page from '@components/Page';
// import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Impressum() {
	return (
		<Page title='Impressum - drinksundthings.at'>
			<Container>
				<div className='text-center mt-5 font-weight-bold'>
					<h1 className='font-weight-bold'>IMPRESSUM</h1>
					<p>Drinks &amp; Things</p>
					<h5>Inhaber: Milan Jovanovic</h5>
					<h5>Gaullachergasse, 1160 Wien</h5>
					<h5>
						<a href='tel:+436608519007'>+43 681 840 72 005</a>
					</h5>
					<h5>
						<a href='mailto:office@zustell-bar.at'>office@drinksundthings.at</a>
					</h5>
				</div>
			</Container>
		</Page>
	);
}
