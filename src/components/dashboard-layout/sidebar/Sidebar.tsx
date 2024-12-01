import { GanttChartSquareIcon, Github } from 'lucide-react'
import Link from 'next/link'

import { LogoutButton } from '@/components/ui/buttons/LogoutButton'

import { COLORS } from '@/constants/color.constants'

import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
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
				<div className='p-3 relative'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.name}
						/>
					))}
				</div>
			</div>
			<footer className='flex gap-2 font-normal text-center p-layout'>
				<a
					href='https://github.com/SecondSocks'
					target='_blank'
					className='flex gap-2 opacity-20 hover:opacity-100 transition-opacity duration-500'
				>
					<Github />
					<h5 className='text-sm'>Developed by SecondSocks</h5>
				</a>
			</footer>
		</aside>
	)
}
