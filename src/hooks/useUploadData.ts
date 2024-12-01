import { useEffect } from 'react'
import { UseFormReset } from 'react-hook-form'

import { TypeUserForm } from '@/types/auth.types'

import { useProfile } from './useProfile'

export function useUploadData(reset: UseFormReset<TypeUserForm>) {
	const { data, isSuccess, isLoading } = useProfile()

	useEffect(() => {
		if (!isSuccess) return
		reset({
			email: data?.user.email,
			name: data?.user.name,
			workInterval: data?.user.workInterval,
			breakInterval: data?.user.breakInterval,
			intervalCount: data?.user.intervalCount
		})
	}, [isSuccess])

	return { isLoading }
}
