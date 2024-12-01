export interface IAuthForm {
	email: string
	password: string
}

export interface IUser {
	id: number
	name?: string
	email: string

	workInterval?: number
	breakInterval?: number
	intervalCount?: number
}

export type TypeUserForm = Omit<IUser, 'id'> & { password?: string }

export interface IAuthResponse {
	accessToken: string
	user: IUser
}
