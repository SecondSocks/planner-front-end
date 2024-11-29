import { RootState } from './root.types'

export interface IPomodoroRoundResponse extends RootState {
	isCompleted?: boolean
	totalSeconds: number
}

export interface IPomodoroSessionResponse extends RootState {
	isCompleted?: boolean
	rounds?: IPomodoroRoundResponse[]
}

export type TypePomodoroSessionState = Partial<
	Omit<IPomodoroSessionResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
