import { GanttChartSquareIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { COLORS } from '@/constants/color.constants'

import { Button } from '../ui/buttons/Button'

import styles from './Header.module.scss'

export function Header() {
	const redirect = useRouter()

	return (
		<div className='flex items-center justify-between w-screen h-full px-layout bg-sidebar'>
			<Link
				href='/'
				className='flex items-center gap-2.5'
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
			<div className={styles.menu}>
				<Link href='#'>
					<h1>Features</h1>
				</Link>
				<Link href='#'>
					<h1>Preview</h1>
				</Link>
				<Link href='#'>
					<h1>Whys us</h1>
				</Link>
			</div>
			<Button onClick={() => redirect.push('/auth')}>Login</Button>
		</div>
	)
}
