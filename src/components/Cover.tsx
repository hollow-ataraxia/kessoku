import {useGetCoversByIdQuery} from '@features/cover-art/image.api.ts'
import {useReleaseQuery} from '@features/musicbrainz/musicbrainz.api'
import type {ReleaseFields} from '@features/musicbrainz/release/release.fields'
import type {FunctionComponent} from 'react'

const Thumbnails: FunctionComponent<{id: string}> = ({id}) => {
	const {data, isLoading} = useGetCoversByIdQuery(id)

	if (isLoading) return null

	return data ? (
		<img
			src={data[0].thumbnails.small}
			alt={data[0].id}
			width={200}
			height={200}
		/>
	) : null
}

const Release: FunctionComponent<ReleaseFields> = props => {
	const {data, isError} = useReleaseQuery(props)
	if (isError) return <div>err</div>
	if (data) return <Thumbnails id={data.id} />
}

export default Release
