import { redirect } from 'next/navigation';
import { isUserLoggedIn } from '../../backendUtils/isUserLoggedIn';
import SignInForm from '../../components/SignInForm';
import signInStyles from './sign-in.module.scss';

export default async function SignIn() {
	const user = await isUserLoggedIn();
	if (!user.error) {
		redirect('/');
	}

	return (
		<main className={signInStyles.main}>
			<h1 className={signInStyles.title}>Sign In</h1>
			<SignInForm></SignInForm>
		</main>
	);
}
