import {type FunctionComponent, type ReactNode, useEffect, useRef} from 'react'
import styles from './Modal.module.css'

type ModalProps = {
	isOpen?: boolean
	close: () => void
	children: ReactNode
}

const Modal: FunctionComponent<ModalProps> = ({isOpen, close, children}) => {
	const dialogElementRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		isOpen
			? dialogElementRef.current?.showModal()
			: dialogElementRef.current?.close()
	}, [isOpen])

	return (
		<dialog
			ref={dialogElementRef}
			className={styles.dialog}
			onClick={e => e.target === e.currentTarget && close()}
			onKeyDown={undefined}
		>
			<div className={styles['modal-body']}>{children}</div>
		</dialog>
	)
}

export default Modal
