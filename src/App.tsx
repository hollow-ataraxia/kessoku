import {type FunctionComponent, useState} from 'react'
import Modal from '#components/Modal/Modal'
import {CoverThumbnail} from '#features/cover-art'
import {Search} from '#features/musicbrainz'
import type {Release} from '#features/musicbrainz/effects/schemes/release.scheme'

const App: FunctionComponent = () => {
	const [releasesIds, setReleasesIds] = useState<Set<string>>(new Set())
	const [releases, setReleases] = useState<Release[]>([])
	const [modal, setModal] = useState(true)

	const addReleaseId = (id: string) =>
		setReleasesIds(prev => new Set([...prev, id]))

	return (
		<div>
			<section
				style={{
					display: 'grid',
					gridAutoFlow: 'column',
					gridAutoColumns: '250px',
					gridTemplateRows: '250px',
					gap: '1em'
				}}
			>
				{Array.from(releasesIds).flatMap(id => (
					<CoverThumbnail key={id} id={id} index={0} />
				))}
			</section>

			<Modal isOpen={modal} close={() => setModal(false)}>
				<Search addRelease={addReleaseId} setReleases={setReleases} />
				<div
					style={{
						display: 'grid',
						gridAutoFlow: 'column',
						gridAutoColumns: '250px',
						gridTemplateRows: '250px',
						overflowY: 'auto',
						padding: '1em'
					}}
				>
					{releases.map(release => (
						<CoverThumbnail
							key={release.id}
							id={release.id}
							index={0}
							action={() => addReleaseId(release.id)}
						/>
					))}
				</div>
			</Modal>

			<button type="button" onClick={() => setModal(true)}>
				open modal
			</button>
		</div>
	)
}

export default App
