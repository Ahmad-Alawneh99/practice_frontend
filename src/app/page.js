// import { redirect } from 'next/navigation';
import { isUserLoggedIn } from '../backendUtils/isUserLoggedIn';
import styles from './page.module.scss';

export default async function Home() {
	const user = await isUserLoggedIn();
	// if (user.error) {
	// 	redirect('/sign-in');
	// }

	return (
		<main className={styles.main}>
			<h1>{user.name}</h1>
		</main>
	);
}
