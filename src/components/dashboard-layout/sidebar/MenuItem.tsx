import Link from 'next/link'

import { IMenuItem } from '@/types/menu.types'

export function MenuItem({ item }: Readonly<{ item: IMenuItem }>) {
	return (
		<div>
			<Link
				href={item.link}
				className='flex gap-2.5 items-center py-1.5 mt-4 px-layout transition-colors hover:bg-border rounded-lg'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
