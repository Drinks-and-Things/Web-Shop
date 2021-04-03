import { createContext, useContext, useState } from 'react';

const OptionsContext = createContext(null);

export const OptionsProvider = ({ children }) => {
	const [options, setOptions] = useState([]);
	const [selectedOptions, setSelectedOptions] = useState({});
	const [optionsModalOpen, setOptionsModalOpen] = useState(false);

	const value = {
		modalOptions: [options, setOptions],
		modalOpen: [optionsModalOpen, setOptionsModalOpen],
		modalSelectedOptions: [selectedOptions, setSelectedOptions],
	};

	return (
		<OptionsContext.Provider
			value={value}
			// value={[options, setOptions]}
		>
			{children}
		</OptionsContext.Provider>
	);
};

export function useOptions() {
	return useContext(OptionsContext);
}

export default OptionsProvider;
