import { API_ENDPOINT } from '../../../lib/js/endpoint';

export const load = async () => {
	const [res1, res2, res3] = await Promise.all([
		fetch(`${API_ENDPOINT}/getirradiance/2023-10-27`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/getirradiance/2023-10-28`).then((res) => res.json()),
        fetch(`${API_ENDPOINT}/getirradiance/2023-10-29`).then((res) => res.json())
	]);
	return {
		data1: res1,
		data2: res2,
        data3: res3
	};
};