import { API_AUTH } from '$env/static/private';
import { redirect } from '@sveltejs/kit';


export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const formData = new FormData();
		formData.set('email', data.get('email'));
		formData.set('password', data.get('password'));

        const res = await fetch(`${API_ENDPOINT}/api/login`, {
            method: 'POST',
            body: formData
        });

		const result = await res.json();


		if (!!result.access_token) {
			cookies.set('accessToken', result.access_token, { path: '/', sameSite: 'strict' });
			throw redirect(302, '/');
		}

		return result;
	}
};
