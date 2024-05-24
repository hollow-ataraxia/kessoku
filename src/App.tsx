import {type FunctionComponent, useState} from 'react'
import Modal from '#components/Modal/Modal'
import {CoverThumbnail} from '#features/cover-art'
import {Search} from '#features/musicbrainz'
import type {Release} from '#features/musicbrainz/effects/schemes/release.scheme'
import NavSections from '#components/NavSections/NavSections'

const App: FunctionComponent = () => {
	const [releasesIds, setReleasesIds] = useState<Set<string>>(new Set())
	const [search, setSearch] = useState<Release[]>()
	const [modal, setModal] = useState(true)

	const addReleaseId = (id: string) =>
		setReleasesIds(prev => new Set([...prev, id]))

	return (
		<div>
			<section>
				{Array.from(releasesIds).flatMap(id => (
					<CoverThumbnail key={id} id={id} index={0} />
				))}
			</section>

			<Modal isOpen={modal} close={() => setModal(false)}>
				<Search setResult={setSearch} />
				<NavSections>
					{search?.map(release => (
						<CoverThumbnail
							key={release.id}
							id={release.id}
							index={0}
							action={() => addReleaseId(release.id)}
						/>
					))}
				</NavSections>
			</Modal>

			<button type="button" onClick={() => setModal(true)}>
				open modal
			</button>
		</div>
	)
}

export default App
