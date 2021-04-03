import React from 'react';

import Page from '@components/Page';
import styles from './Contact.module.scss';
import { Col, Row } from 'react-bootstrap';

export default function Contact() {
	return (
		<Page title='Kontakt'>
			<div className={styles.IQ1KEb}>
				<div className={styles.container}>
					<Row lg={3} md={1} sm={1}>
						<Col
							md={4}
							className='d-flex flex-column justify-content-center align-items-center'
						>
							<h3 className='h2'>Kontakt</h3>
							<ul className='list-unstyled'>
								<li>
									<a itemProp='telephone' dir='ltr' href='tel:+4368184072005'>
										+43 681 840 72 005
									</a>
								</li>
								<li>
									<a
										itemProp='mail'
										dir='ltr'
										href='mailto:office@drinksundthings.at'
									>
										office@drinksundthings.at
									</a>
								</li>
							</ul>
						</Col>
						<Col
							md={4}
							className='d-flex flex-column justify-content-center align-items-center'
						>
							<h3 className='h2'>Adresse</h3>
							<address
								itemProp='address'
								// className='d-flex justify-content-center align-items-center'
							>
								<a
									href="https://www.google.com/maps/place/48%C2%B010'34.0%22N+16%C2%B023'43.3%22E/@48.1761079,16.3953579,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d48.1761079!4d16.3953579"
									target='_blank'
								>
									<div className='text-center'>Arsenalstraße 11</div>
									<div className='text-center'>1030 Wien</div>
									<div className='text-center'>Österreich</div>
								</a>
							</address>
						</Col>
						<Col
							md={4}
							className='d-flex flex-column justify-content-center align-items-center'
						>
							<h3 className='h2 text-break text-center'>Öffnungszeiten</h3>
							<ul className='list-unstyled' itemProp='openingHours'>
								<li>Mo-Do: 20:00-02:00</li>
								<li>Fr und Sa: 20:00-04:00</li>
								<li>So: 20:00-02:00</li>
							</ul>
						</Col>
					</Row>
				</div>
				<a
					className={styles.Q7Zjwb}
					href="https://www.google.com/maps/place/48%C2%B010'34.0%22N+16%C2%B023'43.3%22E/@48.1761079,16.3953579,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d48.1761079!4d16.3953579"
					target='_blank'
				>
					<div
						className={styles.QMbmRe}
						style={{
							backgroundImage:
								"url('https://maps.googleapis.com/maps/api/staticmap?scale=1&size=1600x900&style=feature:poi.business|visibility:off&style=feature:water|visibility:simplified&style=feature:road|element:labels.icon|visibility:off&style=feature:road.highway|element:labels|saturation:-90|lightness:25&format=jpg&language=de&region=AT&markers=color:0xfa8c5c|48.1761079,16.3953579&zoom=16&client=google-presto&signature=EkBpNd83LJKrCi1OvdNtWodqk5E')",
						}}
					></div>
				</a>
			</div>
		</Page>
	);
}
