import {useReleaseQuery} from '@features/musicbrainz/musicbrainz.api'
import {Effect} from 'effect'
import {type FunctionComponent, useMemo, useState} from 'react'

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

const Search: FunctionComponent = () => {
	const [query, setQuery] = useState('星街すいせい レクイエム')
	const fieldsTask = useMemo(() => getMatched, [])
	const getFields = useMemo(
		() => Effect.runSync(fieldsTask(query)),
		[fieldsTask, query]
	)
	const {data} = useReleaseQuery(getFields)

	return (
		<div>
			<input
				type="search"
				value={query}
				onChange={e => setQuery(e.target.value)}
			/>
			{data?.map(r => (
				<span key={r.id}>{r.id}</span>
			))}
		</div>
	)
}

export default Search
