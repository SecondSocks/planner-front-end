import { Header } from '@/components/header/Header'
import { Features } from '@/components/screens/home/Features'
import { Main } from '@/components/screens/home/Main'
import { Preview } from '@/components/screens/home/Preview'

export function Home() {
	return (
		<div className='flex flex-col'>
			<Header />
			<Main />
			<Features />
			<Preview />
		</div>
	)
}
