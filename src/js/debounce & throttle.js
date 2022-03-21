/**
 * debounce 防抖
 */
export const debounce = (fn, delay = 200) => {
  let timer = null
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}

/**
 * throttle 节流
 */

export const throttle = (fn, delay = 200) => {
  let timer = null
  return () => {
    if (timer) return
    timer = setTimeout(() => {
      fn.apply(this, arguments)
      timer = null
    }, delay)
  }
}
