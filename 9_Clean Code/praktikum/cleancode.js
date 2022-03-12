// berapa banyak kekurangan dalam penulisan kode tsb? 2 kekurangan
// bagian mana saja terjadi kekurangan tersebut? bagian deklarasi variabel class dan pendeklarasian isi dari kelas userservice
// tuliskan alasan dari tiap kekurangan tersebut! penulisan kode susah untuk dieja, kodenya sulit dipahami

class kendaraan {
    var rodaMobil = 0;
    var kecepatanPerJam = 0 ;
}

class mobil extends kendaraan {
    void berjalan() {
        tambahKecepatan (10);
    }
}

tambahKecepatan (var kecepatanBaru) {
    kecepatanPerJam += kecepatanBaru;
}

void main() {
    mobilCepat = new mobil ();
    mobilCepat.berjalan();

    mobilLamban = new mobil ();
    mobilLamban.berjalan();
}