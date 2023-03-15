export function resultSuccess<T = any> (result: T, { message = 'ok' } = {}) {
	return {
		code: 200,
		data: result,
		msg: message,
		type: 'success'
	};
}
