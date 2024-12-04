import { DropResult } from '@hello-pangea/dnd'

import { FILTERS } from '../columns.data'

import { useUpdateTask } from './useUpdateTask'

export function useTaskDnd() {
	const { updateTask } = useUpdateTask()

	const onDragEnd = (result: DropResult) => {
		if (!result.destination) return // Выходим, если перетаскивания не случилось

		const destinationColumnId = result.destination.droppableId // Записываем колонку, в которую перетащили

		if (destinationColumnId === result.source.droppableId) return // Выходим, если перетащили в ту же колонку, откуда вытащили

		if (destinationColumnId === 'completed') {
			// Если перетащили в колонку с id 'completed', то изменяем состояние задачи
			updateTask({
				id: result.draggableId,
				data: {
					isCompleted: true
				}
			})
			return
		}

		const newCreatedAt = FILTERS[destinationColumnId].format() // Обрабатываем дату после перетаскивания по id колонки

		updateTask({
			// Обновляем данные таблицы (дату)
			id: result.draggableId,
			data: {
				createdAt: newCreatedAt,
				isCompleted: false
			}
		})
	}

	return { onDragEnd }
}
