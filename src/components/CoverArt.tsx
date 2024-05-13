import {useGetCoversByIdQuery} from '@features/cover-art/image.api.ts'
import type {FunctionComponent} from 'react'

type CoverArtProps = {
	id: string
}

const CoverArt: FunctionComponent<CoverArtProps> = ({id}) => {
	const {data} = useGetCoversByIdQuery(id)

	return (
		<figure key={data?.[0].id}>
			<img src={data?.[0].image} alt="" width={300} />
		</figure>
	)
}

export default CoverArt
