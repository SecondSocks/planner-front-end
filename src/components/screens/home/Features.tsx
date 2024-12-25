import { Card } from '@/components/ui/card/Card'

import { CARDS_DATA } from './Card.data'
import styles from './Home.module.scss'

export function Features() {
	return (
		<div className={styles.features}>
			<h1 className='text-8xl font-medium'>Features</h1>
			<div className={styles.cards}>
				{CARDS_DATA.map(item => (
					<Card
						key={item.title}
						{...item}
					/>
				))}
			</div>
		</div>
	)
}
