import {fetchBaseQuery} from '@reduxjs/toolkit/query'
import {createApi} from '@reduxjs/toolkit/query/react'
import type {Image} from './image.struct.ts'

export const coverArtApi = createApi({
	reducerPath: '@cover-art/image',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://coverartarchive.org/release/'
	}),

	endpoints: builder => ({
		getCoversById: builder.query<Image[], string>({
			query: id => id,
			transformResponse: (response: {images: Image[]}) => response.images
		})
	})
})

export const {useGetCoversByIdQuery} = coverArtApi
