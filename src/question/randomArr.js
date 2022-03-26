/**
 * 乱序数组
 *
 * @param {*} arr
 */
function randomArr(arr) {
  return arr.sort((a, b) => Math.random() - 0.5)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(`🍑🍑🍑 randomArr(arr) 🍑🍑🍑: `, randomArr(arr))

console.log(`🍑🍑🍑 randomArr(arr) 🍑🍑🍑: `, randomArr(arr))

console.log(`🍑🍑🍑 randomArr(arr) 🍑🍑🍑: `, randomArr(arr))

/**
 *  按顺序执行 arr 中的 ajax
 *    要求： 上一个ajax 执行结束 才会执行下一个 ajax
 *
 * @param {*} arr
 */
function serial(arr) {}

// 假设
// ajax1 延时 1 秒 打印 1
// ajax2 延时 2 秒 打印 2
// ajax3 延时 3 秒 打印 3
// ajax... 延时 ... 秒 打印 ...

// 举例
serial([ajax1, ajax2]) //  1 秒后打印 1; 继续等待 2秒后 打印 2
serial([ajax2, ajax4, ajax3]) //  2 秒后打印 2; 继续等待 4 秒后  打印 4; 继续等待 3 秒后 打印 3
