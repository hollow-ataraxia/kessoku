import Cover from '@components/Cover.tsx'
import type {ReleaseFields} from '@features/musicbrainz/release/release.fields'
import {type FunctionComponent, useState} from 'react'

const App: FunctionComponent = () => {
	const [releases] = useState<ReleaseFields[]>([
		{
			release: 'ビビデバ',
			artistname: '星街すいせい'
		},
		{
			release: 'GHOST',
			artistname: '星街すいせい'
		}
	])

	return (
		<div>
			{releases.map(release => (
				<Cover key={release.release} {...release} />
			))}
		</div>
	)
}

export default App
