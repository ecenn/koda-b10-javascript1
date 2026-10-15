// callback

function hitungLingkaran(r, cb1, cb2) {
    let pi = null
    if (r % 7 === 0) {
        pi = 22/7
    } else {
        pi = 3.14
    }
    cb1(r, pi)
    cb2(r, pi)
}

function luas(a, pi1) {
    const luas = pi1 * a * a
    console.log(luas)
}

function keliling(b, pi2) {
    const keliling = 2 * pi2 * b
    console.log(keliling)
}

hitungLingkaran(10, luas, keliling)