import {type FunctionComponent, useState} from 'react'
import {CoverThumbnail} from '#features/cover-art/'
import {Search} from '#features/musicbrainz'

const App: FunctionComponent = () => {
	const [releaseId] = useState<Set<string>>(new Set())

	return (
		<div>
			<section style={{display: 'flex', flexWrap: 'wrap'}}>
				{Array.from(releaseId).map(release => (
					<CoverThumbnail key={release} id={release} />
				))}
			</section>
			<Search />
		</div>
	)
}

export default App
