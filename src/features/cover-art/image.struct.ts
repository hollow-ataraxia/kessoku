import {Schema as S} from '@effect/schema'

export const Image = S.Struct({
	id: S.String,
	thumbnails: S.Struct({large: S.String, small: S.String})
})

export type Image = S.Schema.Type<typeof Image>
