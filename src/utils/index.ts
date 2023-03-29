export function pagination<T = any> (pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize));
}

export function resultPageSuccess<T = any> (
  page: number,
  pageSize: number,
  list: T[],
  { msg = 'ok' } = {}
) {
  const pageData = pagination(page, pageSize, list);
  
  return {
    ...resultSuccess({
      items: pageData,
      total: list.length
    }),
    msg
  };
}

export function resultSuccess<T = any> (result: T, { message = 'ok' } = {}) {
  return {
    code: 200,
    data: result,
    msg: message,
    type: 'success'
  };
}

export function resultError (
  message = 'Request failed',
  { code = 100, result = null } = {}
) {
  return {
    code,
    data: result,
    msg: message,
    type: 'error'
  };
}
