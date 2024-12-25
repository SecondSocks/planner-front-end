import Image from 'next/image'

import styles from './ImageCard.module.scss'

interface IImageCardProps {
	src: string
	width?: number
	height?: number
	alt?: string
}

export function ImageCard({
	src = '/previewImage.jpg',
	width = 1920,
	height = 1080,
	alt = 'Image'
}: Readonly<IImageCardProps>) {
	return (
		<div className={styles.card}>
			<Image
				src={src}
				width={width}
				height={height}
				alt={alt}
				className={styles.image}
			/>
		</div>
	)
}
