import { useState } from 'react';
import { HttpError } from 'http-errors';
export function useAPI(query) {
	const [state, setState] = useState({
		pending: true,
		loading: true,
		pending: true,
		error: '',
		errorCode: '',
		result: {},
	});

	async function run(query) {
		if (state.loading) return;
		setState({ loading: true });

		try {
			const result = await api(query);
			setState({ result });
		} catch (error) {
			if (error instanceof HttpError) {
				console.error(`API Error: ${error.path}`, error);
				setState({ error: error.message, errorCode: error.code });
			} else {
				setState({ error: error.message, errorCode: NaN });
			}
		}
	}

	function reset() {
		setState({ pending: true });
	}

	return [state, run, reset];
}
