import { clone, deepClone } from './clone'

let a = 10
let arr = [1, 2, [3]]
let obj = { a: 1, b: 2, c: { d: 4 } }

describe('浅拷贝', function () {
  let a1 = clone(a)
  test('a === a1', function () {
    expect(a === a1).toBe(true)
  })

  let arr1 = clone(arr)

  test('arr !== arr1', function () {
    expect(arr === arr1).toBe(false)
  })

  test('arr.toString() === arr1.toString()', function () {
    expect(arr.toString()).toBe(arr1.toString())
  })

  test('arr[2] === arr1[2]', function () {
    expect(arr[2]).toBe(arr1[2])
  })

  let obj1 = clone(obj)

  test('obj !== obj1', function () {
    expect(obj === obj1).toBe(false)
  })

  test('JSON.stringify(obj) === JSON.stringify(obj1)', function () {
    expect(JSON.stringify(obj)).toBe(JSON.stringify(obj1))
  })

  test('obj.c === obj1c', function () {
    expect(obj.c).toBe(obj1.c)
  })
})

describe('深拷贝', function () {
  let a1 = deepClone(a)
  test('a == a1', function () {
    expect(a == a1).toBe(true)
  })

  let arr1 = deepClone(arr)

  test('arr !== arr1', function () {
    expect(arr === arr1).toBe(false)
  })

  test('arr.toString() === arr1.toString()', function () {
    expect(arr.toString()).toBe(arr1.toString())
  })

  test('arr[2] !== arr1[2]', function () {
    expect(arr[2] !== arr1[2]).toBe(true)
  })

  let obj1 = deepClone(obj)

  test('obj !== obj1', function () {
    expect(obj === obj1).toBe(false)
  })

  test('JSON.stringify(obj) === JSON.stringify(obj1)', function () {
    expect(JSON.stringify(obj)).toBe(JSON.stringify(obj1))
  })

  test('obj.c !== obj1.c', function () {
    expect(obj.c !== obj1.c).toBe(true)
  })
})
