const r = 7
let pi = null

if (r % 7 === 0) {
    pi = 22 / 7
} else {
    pi = 3.14
}

const impure = () => {
    luas = r * r * pi
    keliling = 2 * pi * r
    return console.log(`Luas: ${luas} dan Keliling: ${keliling}`)
}

impure()

const pure = (j) => {
    luas = j * j * pi
    keliling = 2 * pi * j
    return console.log(`Luas: ${luas} dan Keliling: ${keliling}`)
}

pure(12)