const obj = { name: 'test', age: 29 }
function log(...props) {
    console.log(this.name, this.age, ...props)
}

Function.prototype.myBind = function (context, ...args) {
    return (...rest) => {
        return this.call(context, ...args.concat(rest))
    }
}

Function.prototype.myBind1 = function (context, ...args) {
    return (...props) => {
        const fnId = Symbol()
        context[fnId] = this

        const result = context[fnId](...args.concat(props))

        delete context[fnId]

        return result
    }
}

const boundLog = log.myBind(obj, 'lol')
boundLog('lol1')

const boundLog1 = log.myBind1(obj, 'lol')
boundLog1('lol1')