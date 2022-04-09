# 17 Vue UI Framework

## Resume
Dalam ateri ini mempelajari :
1. Pengenalan Rangka Kerja UI
2. Vuetify
3. Manajemen Warna Tema
4. Gelap Terang
5. Reaktivitas Dengan Kerangka Kerja UI
6. Extra

### Pengenalan Rangka Kerja UI
1. Pengertian = kumpulan elemen visual (seperti tombol, ikon, dll.) dan fungsionalitas yang bisa dipakai secara instan.

2. Cara Kerja = Rangka kerja menyiapkan komponen yang sudah ada, lalu kita tinggal impor ke aplikasi, sesuai dengan kebutuhan dan keinginan.

3. Macam Rangka Kerja UI yang Tersedia = 
    Vuetify
    BootstrapVue
    Buefy
    Ant-design Vue
    Vuesax
    dll.

### Vuetify
1. Pengertian = library/pustaka yang memiliki lebih dari 80 komponen material design

2. Cara Kerja = Tinggal meng-copy dan paste code dari web sesuai yang kita inginkan, karena telah disiapkan komponennya.

3. Dokumentasi Vuetify = tersedia di link https://vuetify.com/en/

4. Penerapan = penggunaan vuetify dapat digunakan dari props pada komponen yang terdiri dari :
    nama prop
    deskripsi singkat
    pratinjau komponen
    pengalihan pratinjau gelap/terang atau biasa disebut dengan darkmode
    experimen dengan codepen
    lalu ada sourcecode dari github yang dapat dihubungkan
ada juga documentation yang terhubung dengan API
    v-btn
    v-btn-toggle

5. Cara Pemasangan = 
    a. memasang dependensi menggunakan
    ``
    npm install vuetify
    ``
    b. lalu daftarkan vuetify ke dalam berkas main.js
    c. ubah App.vue, vuetify harus dibalut dengan v-app dari div menjadi v-app.
    d. tambahkan font kedalam public/index.html

### Manajemen Warna Tema
1. Pengertian = pengaturan set warna yang dapat diterapkan pada tampilan aplikasi.

2. Cara kerja = setel secara manual ketika aplikasi berjalan.
komponen Vuetify menggunakan warna primary sebagai warna dominan.

    cara akses = this.$vuetify.theme.themes.light

### Gelap Terang
1. Pengertian = gelap terang ini juga dapat disebut dengan nama darkmode

2. Cara Kerja = menggunakan variable dengan nilai boolean
    cara akses = this.$vuetify.theme.dark

3. Penerapan = menggunkan fungsi lalu menambahkan menu pilihan warna

### Reaktivitas Dengan Kerangka Kerja UI
1. Pengertian = perubahan ukuran dengan lebar layar tampilan.

2. Cara Kerja = lebar layar dibagi jadi beberapa golongan seperti xs, s, m, l, xl. dengan setiap komponen dapat ditentukan ukurannya berdasarkan golongan tersebut.

### Extra
1. Tabel = mempunyai fitur tambahan untuk pagination, filter dan sort.

2. Validasi Input = mempunyai perops untuk validasi yang cukup canggih, menerima array of functions.

3. Skeleton Loader = untuk menampilkan loading saat web masih mengambil data dari server.

4. Dialog atau Pop Up = yaitu teks yang muncul saat kita pertama kali membuka atau memuat halaman. Disesuaikan sesuai kondisi.

## Task
Membuat 

[index.js](./praktikum/src/utils/index.js)

output :

![Screenshot](./screenshots/img1.png)
![Screenshot](./screenshots/img2.png)
![Screenshot](./screenshots/img3.png)

