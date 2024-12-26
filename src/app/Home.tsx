import { useEffect, useState } from 'react'

import { Header } from '@/components/header/Header'
import { Features } from '@/components/screens/home/Features'
import { Footer } from '@/components/screens/home/Footer'
import { Main } from '@/components/screens/home/Main'
import { Preview } from '@/components/screens/home/Preview/Preview'
import { WhyUs } from '@/components/screens/home/WhysUs/WhyUs'
import { ToTop } from '@/components/ui/buttons/ToTop'

export function Home() {
	const [scroll, setScroll] = useState(0)

	const handleScroll = () => {
		setScroll(window.scrollY)
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className='flex flex-col'>
			<Header />
			<Main />
			<Features />
			<Preview />
			<WhyUs />
			<Footer />
			{scroll > document.documentElement.clientHeight && <ToTop />}
		</div>
	)
}
