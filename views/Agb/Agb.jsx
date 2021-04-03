import React from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import Page from '@components/Page';
import styles from './Agb.module.scss';

const options = {
	renderNode: {
		[BLOCKS.HEADING_2]: (node, children) => <h2 className='w-100 text-center'>{children}</h2>,
	},
};

export default function Agb({ agb }) {
	return (
		<Page title='Allgemeine Geschäftsbedienungen (AGB)'>
			<div className={styles.outer}>
				<div className={styles.agb}>{documentToReactComponents(agb, options)}</div>
			</div>
		</Page>
	);
}

// const options = {
// 	renderNode: {
// 		// [BLOCKS.DOCUMENT]: (node, children) => {
// 		// 	return (
// 		// 		<div className='d-flex justify-content-center flex-column align-items-center'>
// 		// 			{/* {JSON.stringify(children, 0, 4)} */}
// 		// 		{children}
// 		// 		</div>
// 		// 	);
// 		// },
// 		[BLOCKS.HEADING_2]: (node, children) => <h2 className='w-100 text-center'>{children}</h2>,
// 	},
// };
