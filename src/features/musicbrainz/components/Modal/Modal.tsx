import {type FunctionComponent, type JSX, useEffect, useRef} from 'react'
import styles from './Modal.module.css'

type ModalProps = {
	isShow?: boolean
	setShow: (v: boolean) => void
	children: JSX.Element
}

export const Modal: FunctionComponent<ModalProps> = ({
	isShow,
	children,
	setShow
}) => {
	const dialogElementRef = useRef<HTMLDialogElement>(null)

	useEffect(() => {
		isShow
			? dialogElementRef.current?.showModal()
			: dialogElementRef.current?.close()
	}, [isShow])

	return (
		<dialog
			ref={dialogElementRef}
			className={styles.dialog}
			onClick={e => e.target === e.currentTarget && setShow(false)}
			onKeyDown={undefined}
		>
			<div className={styles['modal-body']}>{children}</div>
		</dialog>
	)
}
