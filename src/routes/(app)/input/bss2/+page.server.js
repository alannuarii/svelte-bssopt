import { API_ENDPOINT } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('id_bms', data.get('id_bms'));
		formData.append('tanggal', data.get('tanggal'));
		formData.append('voltage', data.get('voltage'));
		formData.append('temperature', data.get('temperature'));

		const res = await fetch(`${API_ENDPOINT}/uploadbms/bss2`, {
			method: 'POST',
			body: formData
		});

		return res.json();
	}
};

export const load = async () => {
	const res = await fetch(`${API_ENDPOINT}/getidbms`);
	const data = await res.json();
	return {
		data: data
	};
};
