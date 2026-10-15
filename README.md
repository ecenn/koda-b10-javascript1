# Program: Menghitung Luas dan Keliling Lingkaran

## Cara Kerja Program

- Ada object lingkaran yang memiliki key rLingkaran dan 2 method (luasLingkaran dan kelilingLingkaran)
- Destrukturisasi nilai rLingkaran dari object lingkaran dengan alias r
- Inisialisasi variabel pi
- Apabila r habis dibagi 7, maka nilai pi menjadi 22/7
- Jika tidak maka nilai pi menjadi 3.14
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