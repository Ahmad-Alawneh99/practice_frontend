import { cookies } from 'next/headers';

export const isUserLoggedIn = async () => {
	try {
		const cookieObject = cookies();
		const token = cookieObject.get('token');
		if (!token) {
			return { error: true, code: 401, message: 'Authentication required' };
		}

		const res = await fetch(`${process.env.BACKEND_API}/users/profile`, {
			headers: {
				authorization: `Bearer ${token.value}`,
			},
		});

		return await res.json();
	} catch (error) {
		return { error: true, code: 401, message: 'Authentication required' };
	}
};
