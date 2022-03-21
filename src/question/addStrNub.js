/**
 * 实现两个内容为数字的字符串相加
 *
 * @param {*} a
 * @param {*} b
 * @return {*}
 */
export const addStrNub = (a, b) => {
  const length = Math.max(a.length, b.length)
  let res = []

  // 是否需要进位
  let isCeil = false

  for (let i = length - 1; i >= 0; i--) {
    // 当前和 为 a b 当前位置 和 加上 是否需要进位 补的 1
    const sum = (+a[i] || 0) + (+b[i] || 0) + Number(isCeil)

    // 各位添加进入 数组
    res.unshift(sum % 10)

    // sum 大于 9 时 进位
    if (sum > 9) res.unshift(1)

    // 设置下次循环 时的进位状态
    isCeil = !!(sum > 9)
  }
  return res.join('')
}
