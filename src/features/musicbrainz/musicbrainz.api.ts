import {decodeSync} from '@effect/schema/Schema'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Effect} from 'effect'
import type {ArtistFields} from './artist/artist.fields.ts'
import {Artist} from './artist/artist.struct.ts'
import {queryBuilder} from './effects/queries.ts'
import type {ReleaseFields} from './release/release.fields.ts'
import {Release} from './release/release.struct.ts'

export const musicbrainzApi = createApi({
	reducerPath: '@musicbrainz/rest',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://musicbrainz.org/ws/2/',
		prepareHeaders: headers => {
			headers.set('Accept', 'application/json')
			headers.set('User-Agent', window.navigator.userAgent)
			return headers
		}
	}),
	endpoints: builder => ({
		release: builder.query<Release[], Partial<ReleaseFields>>({
			query: arg => `/release/?query=${Effect.runSync(queryBuilder(arg))}`,

			transformResponse: (response: {releases: Release[]}) =>
				response.releases.map(release => decodeSync(Release)(release))
		}),

		artist: builder.query<Artist[], ArtistFields>({
			query: arg => `/artist/?query=${Effect.runSync(queryBuilder(arg))}`,

			transformResponse: (response: {artists: Artist[]}) =>
				response.artists.map(res => decodeSync(Artist)(res))
		})
	})
})

export const {useReleaseQuery} = musicbrainzApi
