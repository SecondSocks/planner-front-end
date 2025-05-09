import {
	IPomodoroSessionResponse,
	TypePomodoroRoundState,
	TypePomodoroSessionState
} from '@/types/pomodoro.types'

import { axiosWithAuth } from '@/api/interceptors'

class PomodoroService {
	private readonly ROOT_URL = '/user/timer'

	async getTodaySession() {
		const response = await axiosWithAuth.get<IPomodoroSessionResponse>(
			`${this.ROOT_URL}/today`
		)
		return response
	}

	async createSession() {
		const response = await axiosWithAuth.post<IPomodoroSessionResponse>(
			this.ROOT_URL
		)
		return response
	}

	async updateSession(id: string, data: TypePomodoroSessionState) {
		const response = await axiosWithAuth.put(`${this.ROOT_URL}/${id}`, data)
		return response
	}

	async deleteSession(id: string) {
		const response = await axiosWithAuth.delete(`${this.ROOT_URL}/${id}`)
		return response
	}

	async updateRound(id: string, data: TypePomodoroRoundState) {
		const response = await axiosWithAuth.put(
			`${this.ROOT_URL}/round/${id}`,
			data
		)
		return response
	}
}

export const pomodoroService = new PomodoroService()
