'use client'

import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/components/ui/buttons/Button'
import { Field } from '@/components/ui/fields/Field'
import Loader from '@/components/ui/loader'

import { TypeUserForm } from '@/types/auth.types'

import { useUpdateSettings } from '@/hooks/useUpdateSettings'
import { useUploadData } from '@/hooks/useUploadData'

export function Settings() {
	const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	const { isLoading } = useUploadData(reset)
	const { mutate, isPending } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

	return isLoading ? (
		<div className='flex justify-center'>
			<Loader />
		</div>
	) : (
		<div>
			<form
				className='w-2/4'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='grid grid-cols-2 gap-10'>
					<div>
						<Field
							id='email'
							label='Email:'
							placeholder='Enter your email:'
							type='email'
							{...register('email', {
								required: 'Email is required',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
									message: 'Invalid email address'
								}
							})}
							extra='mb-4'
						/>
						<Field
							id='name'
							label='Name:'
							placeholder='Enter your name:'
							type='text'
							{...register('name')}
							extra='mb-4'
						/>
						<Field
							id='password'
							label='Password:'
							placeholder='Enter your password:'
							type='password'
							{...register('password', {
								minLength: {
									value: 6,
									message: 'Password must be at least 6 characters'
								}
							})}
							extra='mb-4'
						/>
					</div>
					<div>
						<Field
							id='workInterval'
							label='Work interval (min):'
							placeholder='Enter work interval (min):'
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='breakInterval'
							label='Break interval (min):'
							placeholder='Enter break interval (min):'
							isNumber
							{...register('breakInterval', {
								valueAsNumber: true
							})}
							extra='mb-4'
						/>
						<Field
							id='intervalCount'
							label='Intervals count (max 10):'
							placeholder='Enter intervals count (max 10):'
							isNumber
							{...register('workInterval', {
								valueAsNumber: true
							})}
							extra='mb-6'
						/>
					</div>
				</div>

				<Button
					type='submit'
					disabled={isPending}
				>
					Save
				</Button>
			</form>
		</div>
	)
}
