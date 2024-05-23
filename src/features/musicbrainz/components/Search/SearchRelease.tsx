import {Effect} from 'effect'
import {type FunctionComponent, useEffect, useMemo, useState} from 'react'
import type {Release} from '#features/musicbrainz/effects/schemes/release.scheme'
import {useReleaseQuery} from '#features/musicbrainz/redux/api/musicbrainz.ts'

const getMatched = (text: string) =>
	Effect.gen(function* (_) {
		const match = yield* Effect.succeed(text.match(/[^\s]+/gu))

		if (!match) return {}
		return match.length < 2
			? {
					release: match[0]
				}
			: {
					artistname: match[0],
					release: match[1]
				}
	})

type SearchProps = {
	addRelease: (id: string) => void
	setReleases: (r: Release[]) => void
}

export const Search: FunctionComponent<SearchProps> = ({
	addRelease,
	setReleases
}) => {
	const [query, setQuery] = useState('星街すいせい レクイエム')
	const fieldsTask = useMemo(() => getMatched, [])
	const fields = useMemo(
		() => Effect.runSync(fieldsTask(query)),
		[fieldsTask, query]
	)
	const release = useReleaseQuery(fields)

	useEffect(() => {
		release.data && setReleases(release.data)
	}, [release, setReleases])

	return (
		<div>
			<input
				type="search"
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			<input
				type="button"
				value="add"
				onClick={() => release.data?.[0] && addRelease(release.data[0].id)}
			/>
		</div>
	)
}
