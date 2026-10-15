const r = 7
let pi = null

if (r % 7 === 0) {
    pi = 22 / 7
} else {
    pi = 3.14
}

const luasImpure = () => {
    return r * r * pi
}
console.log(luasImpure())

const kelilingImpure = () => {
    return 2 * pi * r
}
console.log(kelilingImpure())

const luasPure = (j) => {
    return j * j * pi
}
console.log(luasPure(12))

const kelilingPure = (j) => {
    return 2 * pi * j
}
console.log(kelilingPure(12))
