# 19 Vue With Nuxt

## Resume
Dalam materi ini, mempelajari :
1. Pengenalan Nuxt
2. Struktur Direktori Nuxt
3. Nuxt SSG & SSR
4. SEO Meta
5. PWA

### Pengenalan Nuxt
1. apa itu nuxt = kerangka kerja yang dibangun di atas Vue yang membuat pengembangan web menjadi sederhana dan ampuh
2. cara kerja nuxt = inisiasi aplikasi -> jalankan aplikasi
3. pemasangan nuxt = tersedia pada slide
4. menggunakan nuxt = tersedia pada video demo

### Struktur Direktori Nuxt
1. perbedaan struktur direktori dengan vue = 
    - direktori = src, public, views, router
    - vue = pages, static, layouts
2. pages = router di nuxt secara otomatis membaca direktori ini sehingga file yang ada direktoru/pages langsung terhubung menjadi path halaman.
3. layouts = setiap file direktori atau layouts akan membuat tata letak khusus yang dapat diakses dengan properti layouts di komponen halaman
4. static = semua file yang disertakan akan secara otomatis diekspos oleh nuxt dan dapat diakses melalui url root proyek.
### Nuxt SSG & SSR
1. apa itu nuxt SSG & cara kerja = SSG Adalah kepanjangan dari static site generation, metode pengembangan ini lebih cocok untuk situs web yang tidak memiliki halaman dinamis, cara kerjanya ketika sebuah projek dibangun untuk produksi, file html siap pakai akan dibuat di folder dist, kemudian disuguhkan oleh server dan dapat diakses permasing-masing file HTML.
2. apa itu nuxt SSR & cara kerja = SSR adalah kepanjangan dari server side rendering, metode pengembangan ini adalah solusi terbaik untuk proyek dimana halaman dibuat secara real time, yaitu melalui panel admin, misalnya, halaman blog dan e-commerce. cara kerjanya, server yang dibangun kedalam nuxt akan berjalan dalam produksi, yang akan memastikan abahwa file html baru dihasilkan secara realtime ketika data baru diterima, mis. melalui API.

### SEO Meta (Search Engine Optimization)
1. apa itu SEO & SEC Meta = kepanjangan dari search engine optimizatio, yaitu proses meningkatkan kualitas dan kuantitas lalu lintas situs web ke situs web atau halaman web dari mesin mencari. seo meta adalah tag yang tak terlihat di dalam <head> yang memberikan data tentang halaman ke mesin pencari dan pengunjung situs web.
2. Cara kerja seo meta = ada pada slide
3. implementasi seo meta = 
4. seo tag penting = title dan description, canonical, open graph dll.

### PWA
1. apaitu PWA = kepanjangan dari Progressive Web Apps, dibuat dan disempurnakan dengan API modern untuk menghadirkan peningkatan kemampuan, keandalan, dan kemudahan pemasangan sekaligus menjangkau siapa saja, dimana saja, di perangkat apapun dengan basis kode tunggal.
2. cara kerja = web app manifest, service workers, icon, disajikan melalui protokol HTTPS

## Task
### Membuat project 
Pada task ini kita akan membuat sebuah web simple yang hanya berisi isi komponen pwa.
