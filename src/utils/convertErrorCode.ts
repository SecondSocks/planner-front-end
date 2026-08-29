export function convertErrorCode(errorCode: string) {
	if (errorCode.includes('401')) return 'Incorrect email or password'
	if (errorCode.includes('400')) return 'User already exists'
	if (errorCode === 'Network Error' || errorCode.includes('500')) return 'Network Error / Server Error'
	if (errorCode.includes('404')) return 'User not found'
	if (errorCode.includes('422')) return 'Validation error'
	if (errorCode.includes('429')) return 'Too many requests'
	return 'Unknown error'
}
