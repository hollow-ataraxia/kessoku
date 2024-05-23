import {type FunctionComponent, useEffect, useState} from 'react'
import type {Release} from '#features/musicbrainz/effects/schemes/release.scheme'
import {useReleaseQuery} from '#features/musicbrainz/redux/api/musicbrainz'

type SearchProps = {
	setResult: (v: Release[]) => void
}

const Search: FunctionComponent<SearchProps> = ({setResult}) => {
	const [value, setValue] = useState('')
	const release = useReleaseQuery({
		release: value.match(/[^\s]+/gu)?.[0] ?? ''
	})

	useEffect(() => {
		release.data && setResult(release.data)
	}, [release, setResult])

	return (
		<input
			type="search"
			value={value}
			onChange={e => setValue(e.target.value)}
		/>
	)
}

export default Search
