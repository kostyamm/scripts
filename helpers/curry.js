const curry = (fn) => {
    return (...args) => args.length >= fn.length
        ? fn(...args)
        : curry(fn.bind(null, args));
}
