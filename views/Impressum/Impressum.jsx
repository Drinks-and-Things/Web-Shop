import React from 'react';
import { Container } from 'react-bootstrap';

import Page from '@components/Page';
// import { GoogleApiWrapper, Map, InfoWindow, Marker } from 'google-maps-react';
// import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Impressum() {
	return (
		<Page title='Impressum' metaTitle='Impressum - drinkgsandthings.wien'>
			<Container>
				<div className='text-center font-weight-bold'>
					{/* <h1 className='font-weight-bold'>IMPRESSUM</h1> */}
					<p>Drinks &amp; Things</p>
					<h5>Inhaber: Milan Jovanovic</h5>
					<h5>
						<a
							href="https://www.google.com/maps/place/48%C2%B010'34.0%22N+16%C2%B023'43.3%22E/@48.1761079,16.3953579,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d48.1761079!4d16.3953579"
							target='_blank'
						>
							Gaullachergasse, 1160 Wien
						</a>
					</h5>
					<h5>
						<a href='tel:+436608519007'>+43 681 840 72 005</a>
					</h5>
					<h5>
						<a href='mailto:office@zustell-bar.at'>office@drinkgsandthings.wien</a>
					</h5>
				</div>
			</Container>
		</Page>
	);
}
