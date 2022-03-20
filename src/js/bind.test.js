import './bind'

describe('自定义 Bind', () => {
  it('绑定 this', () => {
    function fn(self) {
      return this
    }

    const fn1 = fn.customBind({ x: 100 })
    expect(fn1()).toEqual({ x: 100 })
  })

  it('绑定 参数', () => {
    function fn(a, b, c) {
      return a + b + c
    }

    const fn1 = fn.customBind(null, 10, 20)
    expect(fn1(30)).toBe(60)
  })
})
