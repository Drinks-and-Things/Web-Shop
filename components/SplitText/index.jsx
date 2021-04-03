import React from 'react';

export default function SplitText({ text, role }) {
	return (
		<span aria-label={text} role={role}>
			{this.props.copy.split('').map(function (char, index) {
				let style = { 'animation-delay': 0.5 + index / 10 + 's' };
				return (
					<span aria-hidden='true' key={index} style={style}>
						{char}
					</span>
				);
			})}
		</span>
	);
}
