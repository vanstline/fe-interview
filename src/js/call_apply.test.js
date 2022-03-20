/**
 * 自定义 call apply
 */

import './call_apply'

describe('自定义 call', () => {
  it('绑定 this - 对象类型 ', () => {
    function fn(_this) {
      return this
    }

    const res = fn.customCall({ x: 100 })
    expect(res).toEqual({ x: 100 })
  })

  it('绑定 this - 值类型', () => {
    function fn(_this) {
      return this
    }

    const res = fn.customCall('abc')
    expect(res.toString()).toBe('abc')

    const res1 = fn.customCall(null)
    expect(res1).not.toBeNull()
  })

  it('绑定参数', () => {
    function fn(a, b) {
      return a + b
    }

    const res = fn.customCall(null, 10, 20)
    expect(res).toBe(30)

    const res1 = fn.customCall(null)
    expect(res1).not.toBeNull()
  })
})

describe('自定义 apply', () => {
  it('绑定 this - 对象类型 ', () => {
    function fn(_this) {
      return this
    }

    const res = fn.customApply({ x: 100 })
    expect(res).toEqual({ x: 100 })
  })

  it('绑定 this - 值类型', () => {
    function fn(_this) {
      return this
    }

    const res = fn.customApply('abc')
    expect(res.toString()).toBe('abc')

    const res1 = fn.customApply(null)
    expect(res1).not.toBeNull()
  })

  it('绑定参数', () => {
    function fn(a, b) {
      return a + b
    }

    const res = fn.customApply(null, [10, 20])
    expect(res).toBe(30)

    const res1 = fn.customApply(null)
    expect(res1).not.toBeNull()
  })
})
