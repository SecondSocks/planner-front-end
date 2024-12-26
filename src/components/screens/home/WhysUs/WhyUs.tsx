import { ReviewCard } from '@/components/ui/review-card/ReviewCard'

import styles from '../Home.module.scss'

import { Advantage } from './Advantage'
import { WhyUsData } from './WhyUs.data'

export function WhyUs() {
	return (
		<div className={styles.whyUs}>
			<h1 id='whyus'>Why us?</h1>
			<div className={styles.container}>
				<div>
					{WhyUsData.map(item => (
						<Advantage
							key={item.text}
							{...item}
						/>
					))}
				</div>
				<ReviewCard
					name='Arthur'
					text='I recently started using the Task Planner web app and I want to share my experience. This app has been a godsend for me as it combines several useful features that help me manage my time and tasks effectively.

					The first thing I want to mention is the Tasks feature. Creating and managing tasks in this app is incredibly simple...'
				/>
			</div>
		</div>
	)
}
