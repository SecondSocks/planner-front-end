'use server'

import { redirect } from 'next/navigation'

export async function convertErrorCode(errorCode: string) {
	if (errorCode.includes('401')) return 'Incorrect email or password'
	if (errorCode.includes('400')) return 'User already exists'
	if (errorCode === 'Network Error') redirect('/500')
}
