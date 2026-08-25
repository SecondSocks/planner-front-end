import {
	Dispatch,
	RefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState
} from 'react'

type TypeOut = {
	ref: RefObject<HTMLDivElement>
	isShow: boolean
	setIsShow: Dispatch<SetStateAction<boolean>>
}

export function useOutside(initialIsVisible: boolean): TypeOut {
	const [isShow, setIsShow] = useState(initialIsVisible)
	const ref = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) {
			setIsShow(false)
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})

	return { ref, isShow, setIsShow }
}
