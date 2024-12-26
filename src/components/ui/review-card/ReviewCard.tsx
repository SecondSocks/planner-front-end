import styles from './ReviewCard.module.scss'

export interface IReviewCard {
	name: string
	text: string
}

export function ReviewCard(items: Readonly<IReviewCard>) {
	return (
		<div className={styles.reviewCard}>
			<header>
				<div className={styles.avatar}>{items.name.charAt(0)}</div>
				<h3>{items.name}</h3>
			</header>
			<p>{items.text}</p>
		</div>
	)
}
