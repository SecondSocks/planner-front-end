'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/buttons/Button'

export default function Home() {
	const router = useRouter()
	return (
		<div>
			<h1>Home</h1>
			<Button onClick={() => router.push('/auth')}>Login</Button>
		</div>
	)
}
