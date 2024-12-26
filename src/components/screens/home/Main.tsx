'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/buttons/Button'
import { ImageCard } from '@/components/ui/image-card/ImageCard'

import styles from './Home.module.scss'

export function Main() {
	const redirect = useRouter()

	return (
		<div className={styles.main}>
			<h1>Effective time management</h1>
			<h2>All productivity tools in one app</h2>
			<Button onClick={() => redirect.push('/auth')}>Try for free</Button>
			<ImageCard
				src='/taskListPreview.jpg'
				width={1376}
				height={767}
			/>
		</div>
	)
}
