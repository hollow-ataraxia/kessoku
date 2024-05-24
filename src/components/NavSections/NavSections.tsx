import type {FC, ReactElement} from 'react'
import styles from './NavSections.module.css'

type NavSectionsProps = {
	children: ReactElement | ReactElement[] | undefined
}

const NavSections: FC<NavSectionsProps> = ({children}) => {
	return <nav className={styles.scrollContainer}>{children}</nav>
}

export default NavSections
