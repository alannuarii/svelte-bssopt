import { API_ENDPOINT } from '../../../../lib/js/endpoint';

export const load = async (params) => {
    const param = params.url.pathname
    const getBSS = param.split('/')[2]

	const res = await fetch(`${API_ENDPOINT}/getbms/${getBSS}`);
	const data = await res.json();

	return {
		data: data
	};
};