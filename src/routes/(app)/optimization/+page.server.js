import { API_ENDPOINT } from '../../../lib/js/endpoint';
import { getThreeDays } from '../../../lib/js/date';

export const load = async () => {
	const days = getThreeDays();
	const [res1, res2, res3, res4, res5] = await Promise.all([
		fetch(`${API_ENDPOINT}/getirradiance/${days[2]}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/getirradiance/${days[1]}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/getirradiance/${days[0]}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/getaveragedirradiance/${days[0]}`).then((res) => res.json()),
		fetch(`${API_ENDPOINT}/getmaxirradiance/${days[0]}`).then((res) => res.json())
	]);
	return {
		data1: res1,
		data2: res2,
		data3: res3,
		data4: res4,
		data5: res5
	};
};
