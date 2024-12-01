import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata: Metadata = {
	title: 'Server Error',
	...NO_INDEX_PAGE
}

export default function Error500() {
	return (
		<div className='flex min-h-screen justify-center items-center'>
			<h1 className='pt-2 text-5xl text-center'>500</h1>
			<p className='mx-2 text-5xl text-center'>|</p>
			<p className='pt-4 text-xl text-center font-light'>Server Error</p>
		</div>
	)
}
