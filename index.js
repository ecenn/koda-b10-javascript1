const r = 7
let pi = null

if (r % 7 === 0) {
    pi = 22 / 7
} else {
    pi = 3.14
}

const luas = r * r * pi
console.log(luas)

const keliling = 2 * pi * r
console.log(keliling)