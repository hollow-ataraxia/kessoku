import {musicbrainzApi} from '@features/musicbrainz/artist/artiest.api.ts'
import {configureStore} from '@reduxjs/toolkit'
import {beforeEach, describe, expect, test} from 'vitest'

const makeStore = () =>
	configureStore({
		reducer: {[musicbrainzApi.reducerPath]: musicbrainzApi.reducer},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(musicbrainzApi.middleware)
	})

describe('@musicbrainz/api', () => {
	let store: ReturnType<typeof makeStore>

	beforeEach(() => {
		store = makeStore()
	})

	test('query', async () => {
		const {getArtistsByAlias} = musicbrainzApi.endpoints
		const {dispatch, getState} = store
		const query = '"Hoshimachi,+Suisei"'

		await dispatch(getArtistsByAlias.initiate(query))
		const {data} = getArtistsByAlias.select(query)(getState())

		expect(data?.[0].country).equal('JP')
	})
})
