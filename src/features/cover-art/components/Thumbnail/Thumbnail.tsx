import type {FunctionComponent} from 'react'
import {useGetCoversByIdQuery} from '../../redux/api/coverartarchive.ts'
import styles from './Thumbanil.module.css'

type ThumbanilProps = {
	id: string
	index: number
	action?: () => void
}

export const CoverThumbnail: FunctionComponent<ThumbanilProps> = ({
	id,
	index,
	action
}) => {
	const coverArt = useGetCoversByIdQuery(id)

	return (
		coverArt.data?.[index] && (
			<button
				type="button"
				className={styles.btn}
				onClick={() => action?.()}
				onKeyDown={e => e.key === 'ENTER' && action?.()}
			>
				<img
					className={styles.image}
					srcSet={`${coverArt.data[0].thumbnails.small} 400w, ${coverArt.data[0].thumbnails.large} 600w`}
					src={coverArt.data[index].thumbnails.small}
					alt={id}
					decoding="async"
					loading="lazy"
				/>
			</button>
		)
	)
}
