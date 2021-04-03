import React from 'react';
import Contact from '@views/Contact';

const ContactPage = () => <Contact />;
export default ContactPage;

export async function getStaticProps() {
	// const contact = await getContactInfo();

	return {
		props: {},
	};
}
