import {Schema as S} from '@effect/schema'

export const Artist = S.Struct({
	id: S.String,
	type: S.String,
	name: S.String,
	'sort-name': S.String,
	country: S.optional(S.String, {exact: true})
})

export type Artist = S.Schema.Type<typeof Artist>
