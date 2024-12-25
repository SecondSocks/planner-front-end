import {
	ChartNoAxesCombined,
	Clock8,
	SquareCheckBig,
	Timer
} from 'lucide-react'

import { ICardProps } from '@/components/ui/card/Card'

export const CARDS_DATA: ICardProps[] = [
	{
		icon: SquareCheckBig,
		title: 'Convenient task management',
		description:
			'Create, organize and prioritize tasks in a few clicks. You have two types of task display at your disposal: Kanban and List'
	},
	{
		icon: Timer,
		title: 'Pomodoro timer',
		description:
			'Work with maximum concentration, alternating periods of work and rest, adjust the number of circles to suit yourself'
	},
	{
		icon: ChartNoAxesCombined,
		title: 'Statistics',
		description:
			'Get a better understanding of your work and the time spent on each task with our statistics dashboard'
	},
	{
		icon: Clock8,
		title: 'Time-blocking',
		description:
			'Plan your day and distribute tasks into time blocks. This will help make your day even more efficient'
	}
]
