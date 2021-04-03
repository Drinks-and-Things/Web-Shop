import React from 'react';
import Page from '@components/Page';
import { GithubIcon } from '@components/Icons';

export default function Contact() {
	return (
		<Page>
			<div className='text-center mt-5'>
				<h1>About</h1>
				<p>
					This project was built for practice purposes using <strong>Context API</strong>{' '}
					by React.
				</p>

				<a
					className='btn btn-primary'
					href='https://github.com/AlexSegen/react-shopping-cart'
				>
					<GithubIcon width={'18px'} /> <span className='ml-2 mr-4'>Visit Repo</span>
				</a>
			</div>
		</Page>
	);
}
