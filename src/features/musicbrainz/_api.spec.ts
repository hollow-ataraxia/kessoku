import {musicbrainzApi} from '@features/musicbrainz/musicbrainz.api.ts'
import {configureStore} from '@reduxjs/toolkit'
import {Effect} from 'effect'
import {beforeEach, describe, expect, test} from 'vitest'
import type {ArtistFields} from './artist/artist.fields'
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
		const artistQuery = musicbrainzApi.endpoints.artist
		const {dispatch, getState} = store
		const query: ArtistFields = {artist: '"Hoshimachi,+Suisei"'}

		await dispatch(artistQuery.initiate(query))
		const {data} = artistQuery.select(query)(getState())

		expect(data?.[0].country).equal('JP')
	})
})

describe('query-builders', () => {
	test('args#1', () => {
		const program = queryBuilder({artist: '星街すいせい'})
		const result = Effect.runSync(program)
		expect(result).toBe('artist:"星街すいせい"')
	})

	test('args#3', () => {
		const program = queryBuilder({
			title: 'ビビデバ',
			artist: '星街すいせい',
			country: 'XW'
		})
		const result = Effect.runSync(program)
		expect(result).toBe(
			'title:"ビビデバ" AND artist:"星街すいせい" AND country:"XW"'
		)
	})
})
