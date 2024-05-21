import {configureStore} from '@reduxjs/toolkit'
import {coverArtApi} from '#features/cover-art'

export const store = configureStore({
	reducer: {
		[coverArtApi.reducerPath]: coverArtApi.reducer
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(coverArtApi.middleware)
})
