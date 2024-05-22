import {type FunctionComponent, type JSX, useEffect, useRef} from 'react'
import styles from './Modal.module.css'

type ModalProps = {
	isOpen?: boolean
	close: () => void
	children: JSX.Element
}

export const Modal: FunctionComponent<ModalProps> = ({
	isOpen,
	children,
	close
}) => {
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
