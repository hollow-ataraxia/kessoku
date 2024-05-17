import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Effect} from 'effect'
import {queryBuilder} from './effects/queries'
import type {Release} from './release/release.struct'

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
		release: builder.query<Release, Partial<Release>>({
			query: arg => `/release/?query=${Effect.runSync(queryBuilder(arg))}`,

			transformResponse: (response: {releases: Release[]}) =>
				response.releases[0]
		})
	})
})

export const {useReleaseQuery} = musicbrainzApi
