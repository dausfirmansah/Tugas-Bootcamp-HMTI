//1. Buat masing-masing 2 contoh penggunaan if, if-else, if-else-if, if-else-if-else, dan if bersarang
//2. Buat 2 contoh penggunaan looping dgn while yg dikombinasikan dengan if-else
//3. Buat contoh penggunaan switch-case dan for-loop di javascript (sunnah ini mah)

//Jawaban No.1
//a. if
//contoh 1
    if (20 < 30) {
        console.log("Benar");
    }

//contoh 2
    var jenisKelamin = "Pria";

    if (jenisKelamin == "Pria") {
        console.log("Benar ini Pria");
    }

//b. if - else
//contoh 1
    var BeratBadan = "Gemuk";
    var nilai = 70;

    if (BeratBadan == "Kurus" || nilai > 70) {
        console.log("Maka: Gemuk");
    } else {
        console.log("Maka: Tidak Gemuk");
    }

//contoh 2
    var namaMotor = "Satria FU";
    
    if (namaMotor != "Vario") {
        console.log("Motor Kopling");
    } else {
        console.log("Motor Matic");
    }

//c. if - else - if
//contoh 1
    var kondisi = "Lampu Nyala";

    if (kondisi != "nyala") {
        console.log("Maaf Gelap");
    } else if (kondisi = "nyala") {
        console.log("Hore Terang")
    }

//d. if - else - if - else
//contoh 1
    var Ukuran = 45;

    if (Ukuran <= 40) {
        console.log("Celana Ke Kecilan")
    } else if (Ukuran >= 50) {
        console.log("Celana Ke Besaran")
    } else {
        console.log("Celana Pas")
    }