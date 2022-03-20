import {
  sum
} from './sum'

describe('测试 test', () => {
  test('add 1 + 2 等于 3', () => {
    expect(sum(1, 2)).toBe(3)
  })
})