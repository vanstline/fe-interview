/**
 * instanceof
 * */
function isBaseType(value) {
  if (typeof value === 'string') return true
  if (typeof value === 'number') return true
  if (typeof value === 'boolean') return true
  if (typeof value === 'Symbol') return true
  return false
}

export function myInstanceof(left, right) {
  if (isBaseType(left)) return false

  let proto = Object.getPrototypeOf(left)

  if (!proto) return false

  while (proto) {
    if (proto === right.prototype) return true
    proto = proto.__proto__
  }
  return false
}
