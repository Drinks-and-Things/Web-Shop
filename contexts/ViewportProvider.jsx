import React, { createContext, useContext, useEffect, useState } from 'react';

const ViewportContext = createContext();

export const ViewportProvider = ({ children }) => {
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const handleResize = () => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
	};

	useEffect(() => {
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const contextValues = {
		width,
		height,
	};

	return <ViewportContext.Provider value={contextValues}>{children}</ViewportContext.Provider>;
};

export function useViewport() {
	return useContext(ViewportContext);
}

export default ViewportProvider;

// const checkSize = useCallback(
// 	debounce((width) => {
// 		console.log(width);
// 		width > 1200
// 			? setSlides(4)
// 			: width > 900 //width < 1023 &&
// 			? setSlides(3)
// 			: width > 400 //width > 768 &&
// 			? setSlides(2)
// 			: setSlides(1);
// 	}, 500),
// 	[]
// );
