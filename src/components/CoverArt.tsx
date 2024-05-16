import {useGetCoversByIdQuery} from '@features/cover-art/image.api.ts'
import type {FunctionComponent} from 'react'

type CoverArtProps = {
	id: string
}

const CoverArt: FunctionComponent<CoverArtProps> = ({id}) => {
	const {data} = useGetCoversByIdQuery(id)

	return (
		<img src={data?.[0].thumbnails.small} alt="" width={200} height={200} />
	)
}

export default CoverArt
