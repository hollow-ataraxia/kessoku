import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import type {ReleaseSearchFields} from '../types/release.fields'

type releaseState = {
	searchFields: ReleaseSearchFields[]
}

const initialState: releaseState = {
	searchFields: []
}

export const releaseSlice = createSlice({
	name: 'release',
	initialState,
	reducers: {
		add(state, ...action: PayloadAction<ReleaseSearchFields>[]) {
			state.searchFields.push(...action.map(a => a.payload))
		}
	}
})

export const {add} = releaseSlice.actions
