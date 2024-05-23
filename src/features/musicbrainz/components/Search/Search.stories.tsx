import type {Meta, StoryObj} from '@storybook/react'
import {useState} from 'react'
import {Provider} from 'react-redux'
import {CoverThumbnail} from '#features/cover-art'
import type {Release} from '#features/musicbrainz/effects/schemes/release.scheme.ts'
import {store} from '../../../../redux-store/store.ts'
import Search from './Search.tsx'

type Story = StoryObj<typeof Search>

const meta: Meta<typeof Search> = {
	title: 'musicbrainz/Search',
	component: Search
}

export default meta

export const Releases: Story = {
	render() {
		const [result, setResult] = useState<Release[]>()

		return (
			<Provider store={store}>
				<Search setResult={setResult} />
				{result?.map(release => (
					<CoverThumbnail key={release.id} id={release.id} index={0} />
				))}
			</Provider>
		)
	}
}
