import { ITaskResponse, TypeTaskFormState } from '@/types/task.types'

import { axiosWithAuth } from '@/api/interceptors'

class TaskService {
	private readonly ROOT_URL = '/user/tasks'

	async getTasks() {
		const response = await axiosWithAuth.get<ITaskResponse[]>(this.ROOT_URL)
		return response
	}

	async createTask(data: TypeTaskFormState) {
		const response = await axiosWithAuth.post<ITaskResponse>(
			this.ROOT_URL,
			data
		)
		return response
	}

	async updateTask(id: string, data: TypeTaskFormState) {
		const response = await axiosWithAuth.put(`${this.ROOT_URL}/${id}`, data)
		return response
	}

	async deleteTask(id: string) {
		const response = await axiosWithAuth.delete(`${this.ROOT_URL}/${id}`)
		return response
	}
}

export const taskService = new TaskService()
