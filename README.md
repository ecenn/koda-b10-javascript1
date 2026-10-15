# Program: Menghitung Luas dan Keliling Lingkaran

## Cara Kerja Program

- Ada object lingkaran yang memiliki 2 key (r dan pi) dan 3 method (luasLingkaran, kelilingLingkaran, dan cekPi)
- Destrukturisasi nilai r dari object lingkaran ke dalam variabel r
- Destrukturisasi nilai pi dari object lingkaran ke dalam variabel pi
- Menjalankan method cekPi untuk memperbarui nilai pi
- Inisialisasi variabel luas dengan nilai yang didapat dengan memanggil method luasLingkaran() dari object lingkaran
- Memberikan output luas
- Inisialisasi variabel keliling dengan nilai yang didapat dengan memanggil method kelilingLingkaran() dari object lingkaran
- Memberikan output keliling

## Flowchart

```mermaid

flowchart LR

a((start))
b[/r/]
c{r % 7 == 0}
d[pi = 22 / 7] 
e[pi = 3.14]
f[luas = r * r * pi]
g[/luas/]
h[keliling = 2 * pi * r]
i[/keliling/]
j(((stop)))

a --> b
b --> c
c --true--> d --> f
c --false--> e --> f
f --> g
g --> h
h --> i
i --> j

```