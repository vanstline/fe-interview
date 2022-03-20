/**
 * bind
 *  1. 绑定 this
 *  2. 返回新函数 不执行
 *  3. 参数作为数组传入
 */

import './call_apply'

Function.prototype.customBind = function (context, ...bindArgs) {
  const self = this

  return function (...args) {
    const newArgs = bindArgs.concat(args)
    return self.customApply(context, newArgs)
  }
}
