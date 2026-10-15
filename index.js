const lingkaran = {
    r: 7,
    pi: 22/7,
    luasLingkaran: function() {
        return this.pi * this.r * this.r
    },
    kelilingLingkaran: function() {
        return 2 * this.pi * this.r
    },
    cekPi: function() {
        if (this.r % 7 === 0) {
            this.pi = this.pi
        } else {
            this.pi = 3.14
        }
        return this.pi
    }
}

const {r} = lingkaran
lingkaran.cekPi()

const luas = lingkaran.luasLingkaran()
console.log(`Luas: ${luas}`)

const keliling = lingkaran.kelilingLingkaran()
console.log(`Keliling: ${keliling}`)