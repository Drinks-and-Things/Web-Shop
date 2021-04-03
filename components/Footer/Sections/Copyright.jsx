import React from 'react';
import { ShareButton } from '../../Buttons';

export default function Copyright() {
	return (
		<div className='pb-2'>
			<div className='position-relative text-center'>
				<p className='text-muted mb-0 py-2'>
					{new Date().getFullYear()} &copy; Drinks &amp; Things <br />
					{/* <ShareButton /> */}
				</p>
			</div>
		</div>
	);
}
