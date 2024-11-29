import { RootState } from './root.types'

export enum EnumTaskPriority {
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high'
}

export interface ITaskResponse extends RootState {
	name: string
	priority?: EnumTaskPriority
	isCompleted: boolean
}

export type TypeTaskFormState = Partial<Omit<ITaskResponse, 'id' | 'updateAt'>>
