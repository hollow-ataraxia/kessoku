import {decodeSync} from '@effect/schema/Schema'
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {Release} from './release.struct'

export const releaseApi = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://musicbrainz.org/ws/2/release/',
		prepareHeaders: headers => {
			headers.set('Accept', 'application/json')
			headers.set('User-Agent', window.navigator.userAgent)
			return headers
		}
	}),

	endpoints: builder => ({
		getReleaseById: builder.query<Release, string>({
			query: id => id,
			transformResponse: (response: Release) => response
		}),
		getReleaseByArtistAndTitle: builder.query<
			Release,
			{artist: string; title: string}
		>({
			query: arg => `/?query=title:${arg.title} AND artist:${arg.artist}`,
			transformResponse: (response: {releases: Release[]}) =>
				decodeSync(Release)(response.releases[0])
		})
	})
})

export const {useGetReleaseByIdQuery, useGetReleaseByArtistAndTitleQuery} =
	releaseApi
