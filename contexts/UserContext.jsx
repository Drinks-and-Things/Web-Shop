import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
	const [accepted, setAccepted] = useState(false);

	return <UserContext.Provider value={[accepted, setAccepted]}>{children}</UserContext.Provider>;
};

export function useUser() {
	return useContext(UserContext);
}

export default UserProvider;
