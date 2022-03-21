/**
 * promise
 *  1. 初始化 & 异步调用
 *  2. then catch 链式调用
 *  3. resolve reject all race serial
 */

class MyPromise {
  // pending fulfilled rejected
  state = 'pending'
  value = undefined
  reason = undefined

  fulfilledCallbacks = []
  rejectedCallbacks = []

  constructor(fn) {
    const resolveHandler = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled'
        this.value = value

        this.fulfilledCallbacks.forEach(p => p(this.value))
      }
    }

    const rejectHandler = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason

        this.rejectedCallbacks.forEach(p => p(this.reason))
      }
    }

    try {
      fn(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }

  then(fn1, fn2) {
    fn1 = typeof fn1 === 'function' ? fn1 : v => v
    fn2 = typeof fn2 === 'function' ? fn2 : e => e

    const resolveFn = (resolve, reject) => {
      try {
        const newValue = fn1(this.value)
        resolve(newValue)
      } catch (err) {
        reject(err)
      }
    }

    const rejectFn = (resolve, reject) => {
      try {
        const newReason = fn2(this.reason)
        reject(newReason)
      } catch (err) {
        reject(err)
      }
    }

    switch (this.state) {
      case 'fulfilled':
        return new MyPromise(resolveFn)
      case 'rejected':
        return new MyPromise(rejectFn)
      default:
        return new MyPromise((res, rej) => {
          this.fulfilledCallbacks.push(() => resolveFn(res, rej))
          this.rejectedCallbacks.push(() => rejectFn(res, rej))
        })
    }
  }

  catch(err) {
    return this.then(null, err)
  }
}

// const p10 = new MyPromise((resolve, reject) => {
//   resolve(100)
//   // reject('错误信息...')
//   // setTimeout(() => {
//   //   resolve(100)
//   // }, 1000)
// })

// console.log(`🍑🍑🍑 p10 🍑🍑🍑: `, p10)

// const p11 = p10.then(data1 => {
//   console.log('data1', data1)
//   return data1 + 1
// })
// const p12 = p11.then(data2 => {
//   console.log('data2', data2)
//   return data2 + 2
// })
// const p13 = p12.catch(err => console.error(err))

// TODO resolve
MyPromise.resolve = value => new MyPromise((resolve, reject) => resolve(value))

// TODO reject
MyPromise.reject = reason => new MyPromise((resolve, reject) => reject(reason))

// TODO all
MyPromise.all = function (list) {
  return new MyPromise((resolve, reject) => {
    const result = []
    const length = list.length
    let nub = 0

    list.forEach((p, i) => {
      p.then(data => {
        nub++
        result[i] = data
        if (nub === length) resolve(result)
      }).catch(err => {
        reject(err)
      })
    })
  })
}

// TODO race
MyPromise.race = function (list) {
  return new MyPromise((resolve, reject) => {
    let isResolve = false
    list.forEach(p => {
      p.then(data => {
        if (!isResolve) {
          resolve(data)
          isResolve = true
        }
      }).catch(err => {
        reject(err)
      })
    })
  })
}

const p1 = new MyPromise((resolve, reject) => {
  // resolve(100)
  setTimeout(() => {
    resolve(100)
  }, 3000)
})

// const p2 = MyPromise.resolve(200)
// const p3 = MyPromise.resolve(300)
// const p4 = MyPromise.reject('错误信息...')

// const p5 = MyPromise.all([p1, p2, p3]) // 传入 promise 数组，等待所有的都 fulfilled 之后，返回新 promise ，包含前面所有的结果
// const p6 = MyPromise.all([p1, p2, p3, p4]) // 传入 promise 数组，等待所有的都 fulfilled 之后，返回新 promise ，包含前面所有的结果
// p5.then(result => console.log('all result', result)).catch(err => console.log(err))
// p6.then(result => console.log('all result', result)).catch(err => console.log(err))

// const p7 = MyPromise.race([p1, p2, p3]) // 传入 promise 数组，只要有一个 fulfilled 即可返回
// p7.then(result => console.log('race result', result))

const createPromise = function (time) {
  return (resolve, reject) => {
    return new MyPromise((resolve, reject) => {
      setTimeout(() => {
        console.log('time ' + time)
        resolve()
      }, time * 1000)
    })
  }
}

// TODO 串行
MyPromise.serial = function (list) {
  list.reduce((prev, next) => {
    return prev.then(next)
  }, MyPromise.resolve())
}

var arr = [createPromise(2), createPromise(1), createPromise(3), createPromise(4), createPromise(5)]
// 相当于 Promise.resolve().then(createPromise(2)).then(createPromise(1))......
MyPromise.serial(arr)
