import { CircleChevronUp } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

import styles from './ToTop.module.scss'

export function ToTop() {
	return (
		<ScrollLink
			to='header'
			className={styles.toTop}
			activeClass='active'
			spy={true}
			smooth={true}
			offset={-20}
			duration={500}
		>
			<CircleChevronUp size={32} />
		</ScrollLink>
	)
}
