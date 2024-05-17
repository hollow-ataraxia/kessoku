import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Effect} from 'effect'
import {queryBuilder} from './effects/queries'
import {Release} from './release/release.struct'
import {decodeSync} from '@effect/schema/Schema'
import type {ReleaseFields} from './release/release.fields'

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
		})
	})
})

export const {useReleaseQuery} = musicbrainzApi
