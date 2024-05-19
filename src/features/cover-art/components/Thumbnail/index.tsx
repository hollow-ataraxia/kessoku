import {useGetCoversByIdQuery} from '@features/cover-art/image.api'
import type {FunctionComponent} from 'react'

const CoverThumbnail: FunctionComponent<{id: string}> = ({id}) => {
	const coverArt = useGetCoversByIdQuery(id)

	if (!coverArt.data) return null
	return (
		<figure>
			<img src={coverArt.data[0].thumbnails.small} alt="" />
		</figure>
	)
}

export default CoverThumbnail