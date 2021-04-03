import { createContext, useContext, useState } from 'react';

const DrawerContext = createContext(null);

export const DrawerProvider = ({ children }) => {
	const [accepted, setAccepted] = useState(false);

	return (
		<DrawerContext.Provider value={[accepted, setAccepted]}>{children}</DrawerContext.Provider>
	);
};

export function useUser() {
	return useContext(DrawerContext);
}

export default DrawerProvider;
