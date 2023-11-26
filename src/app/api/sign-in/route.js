export async function POST(request) {
	const res = await fetch(`${process.env.BACKEND_API}/users/sign-in`, {
		method: 'POST',
		body: JSON.stringify(await request.json()),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	const data = await res.json();

	return Response.json(data);
}
