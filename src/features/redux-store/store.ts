import {coverArtApi} from '@features/cover-art/image.api.ts'
import {musicbrainzApi} from '@features/musicbrainz/artist/artiest.api.ts'
import {releaseApi} from '@features/musicbrainz/release/release.api.ts'
import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'

export const store = configureStore({
	reducer: {
		[musicbrainzApi.reducerPath]: musicbrainzApi.reducer,
		[coverArtApi.reducerPath]: coverArtApi.reducer,
		[releaseApi.reducerPath]: releaseApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware()
			.concat(musicbrainzApi.middleware)
			.concat(releaseApi.middleware)
			.concat(coverArtApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

setupListeners(store.dispatch)
