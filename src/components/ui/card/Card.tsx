import { LucideIcon } from 'lucide-react'

import styles from './Card.module.scss'

export interface ICardProps {
	icon: LucideIcon
	title: string
	description: string
}

export function Card(item: ICardProps) {
	return (
		<div className={styles.card}>
			<item.icon size={64} />
			<h2>{item.title}</h2>
			<p>{item.description}</p>
		</div>
	)
}
