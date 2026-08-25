import debounce from 'lodash.debounce'
import { useEffect, useMemo } from 'react'
import { UseFormWatch } from 'react-hook-form'

import { TypeTaskFormState } from '@/types/task.types'

import { useCreateTask } from './useCreateTask'
import { useUpdateTask } from './useUpdateTask'

interface IUseTaskDebounce {
	watch: UseFormWatch<TypeTaskFormState>
	itemId: string
}

export function useTaskDebounce({ watch, itemId }: IUseTaskDebounce) {
	const { createTask } = useCreateTask()
	const { updateTask } = useUpdateTask()

	const debouncedCreateTask = useMemo(
		() =>
			debounce((formData: TypeTaskFormState) => {
				createTask(formData)
			}, 444),
		[]
	)

	// Теперь debouncedUpdateTask будет сохраняться между рендерами, и debounce будет работать как ожидается.
	const debouncedUpdateTask = useMemo(
		() =>
			debounce((formData: TypeTaskFormState) => {
				updateTask({ id: itemId, data: formData })
			}, 444),
		[itemId]
	)

	useEffect(() => {
		const { unsubscribe } = watch(formData => {
			if (itemId) {
				debouncedUpdateTask({
					...formData,
					priority: formData.priority || undefined
				})
			} else {
				debouncedCreateTask(formData)
			}
		})

		return () => {
			unsubscribe()
		}
	}, [watch(), debouncedUpdateTask, debouncedCreateTask])
}
