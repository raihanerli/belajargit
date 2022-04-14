# 18 Vue Work Together With Product - Backend and Devops

## Resume
Dalam ateri ini mempelajari :
1. Tim Produk
2. Mewujudkan Desain Menjadi Aplikasi
3. Tim Backend
4. Memahami Kontrak API
5. Tim Devops
6. Deployment

### Tim Produk
1. Siapa Tim Produk = tim pengembangan produk yaitu sekelompok orang yang mengawasi proses desain produk baru. Setiap anggota tim berkolaborasi dengan yang lain untuk membuat dan menerapkan strategi.
    - Product Management (PM)
    - User EXperiencce (UX)
    - User Interface (UI)

2. Artefak = - PM (product requirements document)
             - UI (desain tampilan)

3. Tools yang dipakai =
    - Figma
    - Zeplin
    - Adobe XD

### Mewujudkan Desain Menjadi Aplikasi
1. Siapa Tim Backend = pengembangan sisi server. Ini berfokus pada database, scripting, dan arsitektur situs web. Kode yang ditulis oleh pengembang back-end membantu browser untuk berkolaborasi dengan informasi database.

2. Artefak = API Endpoint, Documents API

3. Tool = Swaggerhub, Postman

### Memahami Kontrak API
Kita akan menggunakan Postman untuk simulasi konsumsi API.

1. Siapa = tim yang bertujuan untuk mempersingkat siklus hidup pengembangan sistem dan menyediakan pengiriman berkelanjutan dengan kualitas software yang tinggi.

2. Tool = 
    - tanpa perkakas : langsung menghubungkan dan mnenyeragamkan versi dependensi.
    - docker : perkakas untuk mengisolasi dan menyeragamkan versi dependensi sebagai sebuah kontainer
    - Travis CI/Github Actions : perkakas integrasi kontinyu yang secara otomatis menjalankan serangkaian tes/prosedur sebelum deployment.

3. melakukan deployment = SSG : static-site generating "netlify"
                          SSR : server-side Rendering "Heroku"

## Task
Membuat 

[index.js](./praktikum/src/utils/index.js)

output :

![Screenshot](./screenshots/img1.png)
![Screenshot](./screenshots/img2.png)
![Screenshot](./screenshots/img3.png)

