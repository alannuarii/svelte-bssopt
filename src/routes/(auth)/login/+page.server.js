import { API_AUTH } from '$env/static/private';


export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.set('email', data.get('email'));
		formData.set('password', data.get('password'));

		const parsedData = {};
		for await (const [name, value] of formData.entries()) {
			parsedData[name] = value;
		}

		const res = await fetch(`${API_AUTH}/login`, {
			method: 'POST',
			body: JSON.stringify(parsedData),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const result = await res.json();


		if (!!result.access_token) {
			cookies.set('accessToken', result.access_token, { path: '/', sameSite: 'strict' });
			throw redirect(302, '/');
		}

		return result;
	}
};
