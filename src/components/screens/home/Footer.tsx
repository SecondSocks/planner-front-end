import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/buttons/Button'

import styles from './Home.module.scss'

export function Footer() {
	const redirect = useRouter()

	return (
		<div className={styles.footer}>
			<h1>
				Make every day more efficient than the previous one with the help of
				just one app
			</h1>
			<Button onClick={() => redirect.push('/auth')}>Login</Button>
		</div>
	)
}
