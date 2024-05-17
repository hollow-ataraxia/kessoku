import CoverArt from '@components/CoverArt'
import {useReleaseQuery} from '@features/musicbrainz/musicbrainz.api.ts'
import type {FunctionComponent} from 'react'

const App: FunctionComponent = () => {
	const ビビデバ = useReleaseQuery({
		title: 'ビビデバ',
		artist: '星街すいせい'
	})

	return (
		<div>
			<CoverArt id={'e3a7d352-891a-4225-b455-6b2f096645ed'} />
			<CoverArt id={'48f82249-137d-46a7-a582-05eca6044fb7'} />
			{ビビデバ.data && <CoverArt id={ビビデバ.data.id} />}
		</div>
	)
}

export default App
