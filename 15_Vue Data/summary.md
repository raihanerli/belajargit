# 15 Vue Data

## Resume
Dalam materi ini, mempelajari :
1. Data Fetching
2. Penanganan Data Error
3. Validasi Data
4. Autentisai

### Data Fetching
1. Pengertian = pengambilan data oleh program perangkat lunak/skrip. setelah diambil, data dipindahkan ke lokasi alternatif atau ditampilkan di layout.

2. Cara Kerja = API - Application Programming Interface, yaitu sebuah protokol pada dasarnya menyediakan bahasa dan kontrak untuk bagaimana 2 sistem berinteraksi.
API Endpoint : saat API berinteraksi dengan sistem lain, titik kontak dari komunikasi ini dianggap endpoint, yang berbentuk likuk.

3. Fetch data dengan Axios = sebuah library yang dipakai Frontend untuk melakukan HTTP request kpd link API Endpoint.

4. Request Queries = req adalah permohonana pemngambilan data maka req queries adalah syarat yang menyatakan data yang seperti apa yang ingin diambil.
Pagination dengan queries = untuk pembagian atau manajemen halaman salah satu contoh penggunaan string query pada endpoint.

### Penanganan Data Error

1. Pengertian = javascript yang memiliki tipe data dinamis tidak memberikan kesalahan ketika kompilasi, jadi beberapa kali kita akan mendapatkan runtime-error untuk mengakses variabel atau fungsi yang undefined.

Penanganan data error adalah konsep untuk mencegah terjadi runtime-error.

2. Cara Kerja Try Catch Family = metode penanganan error bawaan dari javascript.
try = kode yang ingin dicek apakah terjadi error atau tidak. jika tidak maka blok kode akan jalan sampai selesai.
catch(error) = blok kode yang akan dijalankan ketika terjadi error saja.
finally = blok kode yang tidak menghiraukan error.

3. Cara Kerja Promise = objek promise mewakili penyelesaian atau kegagalan akhirnya dari operasi asinkron dan nilai yang dihasilkannya.
Aktivitas berkolaborasi dengan API pada umumnya berbentuk promise.

### Validasi Data

1. Pengertian = konsep untuk melakukan pengecekan terhadap apakah sudah selesai sesuai dengan kriteria adalah belum, terutama pada input pengguna.

2. Cara Kerja = fungsi validasi menerima nilai yang ingin dicek kemudian mengembalikan nilai keabsahan/validity berupa nilai boolean (true/false).

3. Validasi Pada Form = tag form pada HTML5 memiliki fungsi bawaan untuk validasi input pengguna.

4. Validasi Dengan Regex = Regex adalah Regular Expression. Regex merupakan sebuah teks (string) yang mendefinikan sebuah pola pencarian sehingga dapat kita untuk melakukan matching(pencocokan) dan locate(pencarian).

### Autentikasi dan Authorized

1. Pengertian = suatu proses yang menjadi tindakan atau pembuktian (validasi) terhadap identitas pengguna ketika ingin memasuki dan mengakses sistem tertentu.

2. Cara Kerja = mengirimkan token pada server yang berisi username dan password yang benar lalu akan divalidasi apakah pengguna tsb adalah si A ,B, C atau D.

3. Authorized = 
Autentikasi : mengonfirmasi pengguna sesuai dengan siapa yang dia claim
Authorized : mengatur perizinan terhadap tindakan yang dilakukan pengguna.

## Task
### Membuat project
Pada task ini kita akan membuat sebuah todo list yang di lengkapi dengan tombol hapus dan edit.

[Belum](../vue-cli/src/App.vue)

output :

![Screenshot Content Pic 1](./screenshots/img1.png)
![Screenshot Content Pic 2](./screenshots/img2.png)
![Screenshot Content Pic 3](./screenshots/img3.png)
