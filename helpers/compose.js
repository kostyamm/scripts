const compose = (...fns) => {
    return (x) => fns.reduceRight((v, f) => f(v), x)
}

const pipe = (...fns) => {
    return (x) => fns.reduce((v, f) => f(v), x)
}

