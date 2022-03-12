// berapa banyak kekurangan dalam penulisan kode tsb? 2 kekurangan
// bagian mana saja terjadi kekurangan tersebut? bagian deklarasi variabel class dan pendeklarasian isi dari kelas userservice
// tuliskan alasan dari tiap kekurangan tersebut! penulisan kode susah untuk dieja, kodenya sulit dipahami

class transportation {
    var carType = "pick up";
    var velocityPerHour = 0 ;
}

class car extends transportation {
    void drive() {
        addVelocity (20);
    }
}

addVelocity (var newVelocity) {
    velocityPerHour += newVelocity;
}

void main() {
    fastCar = new car ();
    fastCar.drive();

    slowCar = new car ();
    slowCar.drive();
}