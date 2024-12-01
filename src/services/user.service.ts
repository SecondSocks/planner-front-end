import { IUser, TypeUserForm } from '@/types/auth.types'

import { axiosWithAuth } from '@/api/interceptors'

export interface IProfileResponse {
	user: IUser
	statistics: {
		label: string
		value: string
	}[]
}

class UserService {
	private readonly ROOT_URL = '/user/profile'

	async getProfile() {
		const response = await axiosWithAuth.get<IProfileResponse>(this.ROOT_URL)
		return response.data
	}

	async update(data: TypeUserForm) {
		const response = await axiosWithAuth.put(this.ROOT_URL, data)
		return response
	}
}

export const userService = new UserService()
