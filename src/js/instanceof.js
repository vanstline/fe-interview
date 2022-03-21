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
  if (left == null) return false
  if (isBaseType(left)) return false

  let instance = left.__proto__

  while (instance) {
    if (instance === right.prototype) {
      return true
    }
    instance = instance.__proto__
  }
  return false
}

const obj = {
  a: 100,
  [0]: 111,
}

console.log(`🍑🍑🍑 obj 🍑🍑🍑: `, obj)
