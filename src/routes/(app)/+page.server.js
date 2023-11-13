import { API_ENDPOINT } from '../../lib/js/endpoint';
import { getYesterday, getToday } from '../../lib/js/date';

export const load = async () => {
	const [res1, res2] = await Promise.all([
		fetch(`${API_ENDPOINT}/optimization/${getYesterday()}`).then((res) => res.json()),
		fetch(`https://sierrapy.alanpy.xyz/rombss/${getToday()}`).then((res) => res.json())
	]);

	return {
		data4: res1.data.avg,
		data5: res1.data.max,
        data6: res2
	};
};
