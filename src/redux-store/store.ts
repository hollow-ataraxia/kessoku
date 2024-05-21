import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {coverArtApi} from '#features/cover-art'
import {musicbrainzApi} from '#features/musicbrainz/redux/api/musicbrainz.ts'

export const store = configureStore({
	reducer: {
		[musicbrainzApi.reducerPath]: musicbrainzApi.reducer,
		[coverArtApi.reducerPath]: coverArtApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(musicbrainzApi.middleware)
			.concat(coverArtApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
