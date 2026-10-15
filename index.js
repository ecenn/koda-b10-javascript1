// callback

let pi = null

function cekPi(r, cb1, cb2) {
    if (r % 7 === 0) {
        pi = 22/7
    } else {
        pi = 3.14
    }
    cb1()
    cb2()
}

function luas() {
    const luas = pi * r * r
    console.log(luas)
}

function keliling() {
    const keliling = 2 * pi * r
    console.log(keliling)
}

cekPi(7, luas, keliling)