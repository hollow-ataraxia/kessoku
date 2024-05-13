import CoverArt from '@components/CoverArt'
import {useGetArtistsByAliasQuery} from '@features/musicbrainz/artist/artiest.api.ts'
import type {FunctionComponent} from 'react'

const App: FunctionComponent = () => {
	const {data} = useGetArtistsByAliasQuery('"Hoshimachi, Suisei"')

	return (
		<div>
			{data?.map(_ => (
				<section key={_.id}>
					<p>{_.name}</p>
					<p>{_['sort-name']}</p>
				</section>
			))}
			<CoverArt id={'e3a7d352-891a-4225-b455-6b2f096645ed'} />
		</div>
	)
}

export default App
