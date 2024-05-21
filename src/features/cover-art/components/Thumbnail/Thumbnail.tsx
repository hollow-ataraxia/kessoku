import type {FunctionComponent} from 'react'
import {useGetCoversByIdQuery} from '../../redux/api/coverartarchive.ts'
import styles from './Thumbanil.module.css'

export const CoverThumbnail: FunctionComponent<{id: string}> = ({id}) => {
	const coverArt = useGetCoversByIdQuery(id)

	if (!coverArt.data) return null
	return (
		<figure className={styles.figure}>
			<img
				className={styles.image}
				src={coverArt.data[0].thumbnails.small}
				alt=""
			/>
		</figure>
	)
}
