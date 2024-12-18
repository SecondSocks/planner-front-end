import { GanttChartSquareIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { COLORS } from '@/constants/color.constants'

import { Button } from '../ui/buttons/Button'

export function Header() {
	const redirect = useRouter()

	return (
		<div className='flex items-center justify-between px-layout w-20%'>
			<Link
				href='/'
				className='flex items-center gap-2.5 p-layout'
			>
				<GanttChartSquareIcon
					color={COLORS.primary}
					size={38}
				/>
				<span className='text-2xl font-bold relative'>
					Planner
					<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
						BETA
					</span>
				</span>
			</Link>
			<Button onClick={() => redirect.push('/auth')}>Login</Button>
		</div>
	)
}
