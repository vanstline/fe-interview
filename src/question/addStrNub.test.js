import { addStrNub } from './addStrNub'

describe('两个内容为数字的字符串相加', () => {
  test(`'111111' + '222222' = '333333'`, () => {
    expect(addStrNub('111111', '222222')).toBe('333333')
  })

  test(`'9111' + '2222' = '11333'`, () => {
    expect(addStrNub('9111', '2222')).toBe('11333')
  })
})
