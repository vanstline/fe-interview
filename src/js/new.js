export const customNew = (constructor, ...args) => {
    const obj = Object.create(constructor.prototype)

    constructor.apply(obj, args)
    return obj
}
