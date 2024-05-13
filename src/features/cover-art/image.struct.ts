import {Schema as S} from '@effect/schema'

export const Image = S.Struct({
	id: S.String,
	image: S.String.pipe(
		S.filter(value => {
			try {
				new URL(value)
				return true
			} catch (_) {
				return false
			}
		})
	)
})

export type Image = S.Schema.Type<typeof Image>
