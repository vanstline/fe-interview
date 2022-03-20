import { customNew } from './new'

describe('实现一个 new', () => {
  it('new', () => {
    function Person(name, age) {
      this.name = name
      this.age = age
      return this
    }

    const f = customNew(Person, '张三', 24)

    expect(f.name).toBe('张三')
    expect(f.age).toBe(24)
    expect(f instanceof Person).toBe(true)
  })
})
