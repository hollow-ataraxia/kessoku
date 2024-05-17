import {Effect} from 'effect'

type Field = {
	field: string
	value: string
}
/* 
function makeQueryFields(args: Record<string, string>, fields: Field[] = []) {
	for (const key in args)
		if (Object.prototype.hasOwnProperty.call(args, key))
			fields.push({field: key, value: args[key]})

	return Effect.succeed(fields)
}
*/

const makeFields = (args: Record<string, string>) =>
	Effect.sync(() =>
		Object.keys(args).map(key => ({field: key, value: args[key]}))
	)

const makeQuery = (fields: Field[], query = ''): Effect.Effect<string> =>
	fields.length === 0
		? Effect.succeed(query)
		: makeQuery(
				fields.slice(1),
				query.concat(
					`${fields[0].field}:"${fields[0].value}"`,
					fields.length > 1 ? ' AND ' : ''
				)
			)

export const queryBuilder = (args: Record<string, string>) =>
	Effect.gen(function* (_) {
		const fields = yield* _(makeFields(args))
		return yield* _(makeQuery(fields))
	})
