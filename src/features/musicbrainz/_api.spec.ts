import {musicbrainzApi} from '@features/musicbrainz/artist/artiest.api.ts'
import {configureStore} from '@reduxjs/toolkit'
import {Effect} from 'effect'
import {beforeEach, describe, expect, test} from 'vitest'
import {queryBuilder} from './effects/queries'

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

describe('effect', () => {
	test('builQuery', async () => {
		const program = queryBuilder({
			title: 'ビビデバ',
			artist: '星街すいせい',
			country: 'XW'
		})

		await Effect.runPromise(program).then(console.log)
	})
})
