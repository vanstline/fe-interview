function isBaseType(value) {
  if (typeof value === 'string') return true
  if (typeof value === 'number') return true
  if (typeof value === 'boolean') return true
  if (typeof value === 'Symbol') return true
  return false
}

/**
 * 浅拷贝
 *
 * @param {*} data
 * @return {*}
 */
function clone(data) {
  if (isBaseType(data)) return data

  if (Array.isArray(data)) {
    return data.map(item => item)
  }

  if (typeof data === 'object') {
    let res = {}
    Object.entries(data).forEach(([k, v]) => (res[k] = v))
    return res
  }
}

/**
 * 深拷贝
 *
 * @param {*} data
 * @return {*}
 */
function deepClone(data) {
  if (isBaseType(data)) return data

  let res = null
  if (Array.isArray(data)) {
    res = []
    data.forEach(item => {
      res.push(deepClone(item))
    })

    return res
  }

  if (typeof data === 'object') {
    res = {}
    Object.entries(data).forEach(([k, v]) => (res[k] = deepClone(v)))
    return res
  }
}

export { clone, deepClone }
