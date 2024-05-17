import {Schema as S} from '@effect/schema'

const artist_credit = S.Struct({
	name: S.String,
	artist: S.Struct({
		id: S.String,
		name: S.String,
		'sort-name': S.String
	})
})

export const Release = S.Struct({
	id: S.String,
	title: S.String,
	'artist-credit': S.Array(artist_credit)
})

export type Release = S.Schema.Type<typeof Release>
