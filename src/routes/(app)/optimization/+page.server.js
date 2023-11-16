import { API_ENDPOINT } from '$env/static/private';
import { getToday } from '../../../lib/js/date';

// export const load = async () => {
// 	const days = getThreeDays();
// 	const [res1, res2, res3, res4, res5] = await Promise.all([
// 		fetch(`${API_ENDPOINT}/getirradiance/${days[2]}`).then((res) => res.json()),
// 		fetch(`${API_ENDPOINT}/getirradiance/${days[1]}`).then((res) => res.json()),
// 		fetch(`${API_ENDPOINT}/getirradiance/${days[0]}`).then((res) => res.json()),
// 		fetch(`${API_ENDPOINT}/getaveragedirradiance/${days[0]}`).then((res) => res.json()),
// 		fetch(`${API_ENDPOINT}/getmaxirradiance/${days[0]}`).then((res) => res.json())
// 	]);
// 	return {
// 		data1: res1,
// 		data2: res2,
// 		data3: res3,
// 		data4: res4,
// 		data5: res5
// 	};
// };

export const load = async () => {
	const res = await fetch(`${API_ENDPOINT}/optimization/${getToday()}`);
	const data = await res.json();

	return {
		data1: data.data.irr1,
		data2: data.data.irr2,
		data3: data.data.irr3,
		data4: data.data.avg,
		data5: data.data.max
	};
};
