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
    hasil = [luas, keliling]
    return hasil
}

lingkaran1 = impure()
const [luas1, keliling1] = lingkaran1
console.log(`Luas: ${luas1} dan Keliling ${keliling1}`)

const pure = (j) => {
    luas = j * j * pi
    keliling = 2 * pi * j
    hasil = [luas, keliling]
    return hasil
}

lingkaran2 = pure(12)
const [luas2, keliling2] = lingkaran2
console.log(`Luas: ${luas2} dan Keliling ${keliling2}`)