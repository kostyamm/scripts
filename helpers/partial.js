const partial = (fn, apply) => {
    return (...args) => fn(...apply, args);
}
