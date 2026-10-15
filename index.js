const lingkaran = {
    rLingkaran: 7,
    luasLingkaran: function() {
        return pi * this.rLingkaran * this.rLingkaran
    },
    kelilingLingkaran: function() {
        return 2 * pi * this.rLingkaran
    }
}

const {rLingkaran: r} = lingkaran
let pi = null

if (r % 7 === 0) {
    pi = 22 / 7
} else {
    pi = 3.14
}

const luas = lingkaran.luasLingkaran()
console.log(`Luas: ${luas}`)

const keliling = lingkaran.kelilingLingkaran()
console.log(`Keliling: ${keliling}`)