'use client';
import { Button, Stack, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const handleSignIn = async (router, signInValues) => {
	const res = await fetch('/api/sign-in', {
		method: 'POST',
		body: JSON.stringify(signInValues),
	});
	const data = await res.json();

	if (data.token) {
		document.cookie = `token=${data.token}; path=/`;
		router.push('/');
	}
};

export default function SignInForm() {
	const router = useRouter();
	const [signInValues, setSignInValues] = useState({ email: '', password: '' });

	return (
		<Stack spacing={2} width={450} margin='auto'>
			<TextField
				id='email'
				label='Email'
				type='outlined'
				size='small'
				fullWidth
				onChange={(event) => setSignInValues({ ...signInValues, email: event.target.value })}
				error={!signInValues.email}/>
			<TextField
				id='password'
				label='Password'
				type='outlined'
				size='small'
				fullWidth
				onChange={(event) => setSignInValues({ ...signInValues, password: event.target.value })}
				error={!signInValues.password}/>
			<Button variant='contained' onClick={() => handleSignIn(router, signInValues)} disabled={!signInValues.email || !signInValues.password}>Sign in</Button>
		</Stack>
	);
}
