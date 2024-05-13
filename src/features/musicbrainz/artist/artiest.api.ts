import {decodeSync} from '@effect/schema/Schema'
import {fetchBaseQuery} from '@reduxjs/toolkit/query'
import {createApi} from '@reduxjs/toolkit/query/react'
import {Artist} from '../artist/artist.struct.ts'

type ArtistEndpointResponeType = {
	created: string
	count: number
	offset: number
	artists: Artist[]
}

export const musicbrainzApi = createApi({
	reducerPath: '@musicbrainz/artist',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://musicbrainz.org/ws/2/',

		prepareHeaders: headers => {
			headers.set('Accept', 'application/json')
			headers.set('User-Agent', window.navigator.userAgent)
			return headers
		}
	}),

	endpoints: builder => ({
		getArtistsByAlias: builder.query<Artist[], string>({
			query: alias => `/artist/?query=alias:${alias}`,

			transformResponse: (response: ArtistEndpointResponeType) =>
				response.artists.map(res => decodeSync(Artist)(res))
		})
	})
})

export const {useGetArtistsByAliasQuery} = musicbrainzApi
