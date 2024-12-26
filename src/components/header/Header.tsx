import { GanttChartSquareIcon } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Link as LinkScroll } from 'react-scroll'

import { COLORS } from '@/constants/color.constants'

import { Button } from '../ui/buttons/Button'

import styles from './Header.module.scss'

export function Header() {
	const redirect = useRouter()

	return (
		<div
			className='flex items-center justify-between w-screen h-full px-layout bg-sidebar'
			id='header'
		>
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
				<LinkScroll
					to='features'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-20}
					duration={500}
				>
					<h1>Features</h1>
				</LinkScroll>
				<LinkScroll
					to='preview'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-20}
					duration={500}
				>
					<h1>Preview</h1>
				</LinkScroll>
				<LinkScroll
					to='whyus'
					activeClass='active'
					spy={true}
					smooth={true}
					offset={-20}
					duration={500}
				>
					<h1>Whys us</h1>
				</LinkScroll>
			</div>
			<Button onClick={() => redirect.push('/auth')}>Login</Button>
		</div>
	)
}
