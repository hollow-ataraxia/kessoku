import {decodeSync} from '@effect/schema/Schema'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Effect} from 'effect'
import {queryBuilder} from '#features/musicbrainz/effects/queries.ts'
import {Artist} from '#features/musicbrainz/effects/schemes/artist.scheme.ts'
import {Release} from '#features/musicbrainz/effects/schemes/release.scheme.ts'
import type {ArtistFields} from '../../types/artist.fields.ts'
import type {ReleaseSearchFields} from '../../types/release.fields.ts'

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
		release: builder.query<Release[], Partial<ReleaseSearchFields>>({
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
