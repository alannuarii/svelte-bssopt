import { API_ENDPOINT } from '$env/static/private';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.append('irradiance', data.get('irradiance'));

		const res = await fetch(`${API_ENDPOINT}/uploadirradiance`, {
			method: 'POST',
			body: formData,
			timeout: 600000
		});

		return res.json();
	}
};
