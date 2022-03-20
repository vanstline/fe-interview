/**
 * all 和 apply
 * 作用： 给函数绑定 this， 并执行
 *  1. 绑定 this
 *  2. 立即执行
 *  3. call 参数是依次传入， apply 参数是作为数组传入
 */

Function.prototype.customCall = function (context, ...args) {
  if (context == null) context = globalThis
  // 处理值类型
  if (typeof context !== 'object') context = new Object(context)

  const fnKey = Symbol()
  context[fnKey] = this

  const result = context[fnKey](...args)

  delete context[fnKey]

  return result
}

Function.prototype.customApply = function (context, args = []) {
  if (context == null) context = globalThis
  if (typeof context !== 'object') context = new Object(context)

  const fnKey = Symbol()
  context[fnKey] = this

  const result = context[fnKey](...args)

  delete context[fnKey]

  return result
}
