import { LucideIcon } from 'lucide-react'

import styles from '../Home.module.scss'

export interface IAdvantage {
	icon: LucideIcon
	text: string
}

export function Advantage(item: Readonly<IAdvantage>) {
	return (
		<div className={styles.advantage}>
			<item.icon />
			<h2>{item.text}</h2>
		</div>
	)
}
