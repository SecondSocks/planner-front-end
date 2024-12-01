'use client'

import Loader from '@/components/ui/loader'

import { useProfile } from '@/hooks/useProfile'

export function Profile() {
	const { data, isLoading } = useProfile()

	return (
		<div className='absolute top-big-layout right-big-layout'>
			{isLoading ? (
				<Loader />
			) : (
				<div className='flex items-center'>
					<div className='text-right mr-3'>
						<p className='font-bold -mb-1'>{data?.user.name || 'User'}</p>
						<p className='text-sm opacity-40'>{data?.user.email}</p>
					</div>
					<div className='w-10 h-10 flex justify-center items-center text-2xl text-white bg-white/20 rounded-full uppercase'>
						{data?.user.name?.charAt(0) || 'U'}
					</div>
				</div>
			)}
		</div>
	)
}
