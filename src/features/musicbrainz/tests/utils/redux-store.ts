import {configureStore} from '@reduxjs/toolkit'
import {musicbrainzApi} from '#features/musicbrainz'

export const store = configureStore({
	reducer: {
		[musicbrainzApi.reducerPath]: musicbrainzApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(musicbrainzApi.middleware)
})
