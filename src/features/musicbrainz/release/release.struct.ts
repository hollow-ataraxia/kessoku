import {Schema as S} from '@effect/schema'

export const Release = S.Struct({
	id: S.String,
	title: S.String,
	artist: S.String
})

export type Release = S.Schema.Type<typeof Release>
