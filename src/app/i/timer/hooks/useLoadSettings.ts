'use client'

import { useProfile } from '@/hooks/useProfile'

export function useLoadSettings() {
	const { data } = useProfile()

	const workInterval = data?.user.workInterval ?? 50 // ?? - возвращает правое значение, если левое undefined или null, в противном случае возвращает левое
	const breakInterval = data?.user.breakInterval ?? 10

	return { workInterval, breakInterval }
}
