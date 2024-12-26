'use client'

import { useEffect, useState } from 'react'

import { ImageCard } from '@/components/ui/image-card/ImageCard'

import { COLORS } from '@/constants/color.constants'

import styles from '../Home.module.scss'

import { ImagesSrc } from './Preview.data'

export function Preview() {
	const [image, setImage] = useState<string>('/dashboardPreview.jpg')
	const [checkedId, setCheckedId] = useState<number>(0)

	useEffect(() => {
		const changeId = setTimeout(() => {
			if (checkedId === 4) {
				setCheckedId(0)
			} else {
				setCheckedId(checkedId + 1)
			}
		}, 5000)

		return () => clearTimeout(changeId)
	}, [checkedId])

	useEffect(() => {
		setImage(ImagesSrc[checkedId])
	}, [checkedId])

	return (
		<div className={styles.preview}>
			<h1 id='preview'>Beautiful and convenient functionality in one place</h1>
			<div className={styles.container}>
				<fieldset className={styles.selection}>
					<div
						style={{
							borderColor: checkedId === 0 ? COLORS.primary : 'white',
							opacity: checkedId === 0 ? 1 : 0.4
						}}
					>
						<input
							type='radio'
							id='dashboard'
							name='dashboard'
							checked={checkedId === 0}
							onChange={() => setCheckedId(0)}
						/>
						<label htmlFor='dashboard'>Dashboard</label>
					</div>
					<div
						style={{
							borderColor: checkedId === 1 ? COLORS.primary : 'white',
							opacity: checkedId === 1 ? 1 : 0.4
						}}
					>
						<input
							type='radio'
							id='tasks'
							name='tasks'
							checked={checkedId === 1}
							onChange={() => setCheckedId(1)}
						/>
						<label htmlFor='tasks'>Tasks</label>
					</div>
					<div
						style={{
							borderColor: checkedId === 2 ? COLORS.primary : 'white',
							opacity: checkedId === 2 ? 1 : 0.4
						}}
					>
						<input
							type='radio'
							id='timer'
							name='timer'
							checked={checkedId === 2}
							onChange={() => setCheckedId(2)}
						/>
						<label htmlFor='timer'>Timer</label>
					</div>
					<div
						style={{
							borderColor: checkedId === 3 ? COLORS.primary : 'white',
							opacity: checkedId === 3 ? 1 : 0.4
						}}
					>
						<input
							type='radio'
							id='time-blocking'
							name='time-blocking'
							checked={checkedId === 3}
							onChange={() => setCheckedId(3)}
						/>
						<label htmlFor='time-blocking'>Time-blocking</label>
					</div>
					<div
						style={{
							borderColor: checkedId === 4 ? COLORS.primary : 'white',
							opacity: checkedId === 4 ? 1 : 0.4
						}}
					>
						<input
							type='radio'
							id='settings'
							name='settings'
							checked={checkedId === 4}
							onChange={() => setCheckedId(4)}
						/>
						<label htmlFor='settings'>Settings</label>
					</div>
				</fieldset>
				<ImageCard
					src={image}
					width={1079}
					height={573}
				/>
			</div>
		</div>
	)
}
