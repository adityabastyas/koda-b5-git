// Pada sebuah permainan tebak angka, pengguna dapat menebak angka rahasia apa yang dipilih oleh sistem dari 1 sampai 100. Pengguna dapat menebak terus menerus hingga berhasil. Sistem akan membantu pengguna dengan memberikan output berupa lebih besar, lebih kecil atau benar. Jika pengguna dapat menebak angka rahasia, maka sistem akan menampilkan jumlah tebakan yang dilakukan oleh pengguna. Tuliskan kode javascript dari permasalahan tersebut!

//algoritma
// 1. Tentukan angka random dari 1-100
// 2. Menerima masukan angka tebakkan dari pengguna
// 3. Cek apakah masukan pengguna sama dengan angka random
// 3.1 jika ya, maka lanjut ke langkah
// 4. cek apakah masukan pengguna lebih besar dari angka random
//4.1 jika ya, maka tampilkan "tebakan terlalu besar" lalu kembali ke langkah 2
// 5. cek apakah masukan pengguna lebih kecil dari angka random
// 5.1 jikaya, maka tampilkan "tebakan terlalu kecil", lalu kembali kelangkah 2
// 6. tampilkan "jawaban anda benar" dan jumlah percobaan selesai

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let sistem = Math.floor(Math.random() * 100) + 1; //angka rahasia
let berpaKaliTebak = 0;

function tebak() {
  rl.question("Masukkan angka dari 1-100 ", (inputAngka) => {
    let angka = parseInt(inputAngka);
    berpaKaliTebak++;

    if (isNaN(angka)) {
      console.log("Input harus angka");
      return tebak();
    }
    if (angka === sistem) {
      berpaKaliTebak++;
      console.log(
        "tebakan anda benar",
        "anda menebak",
        berpaKaliTebak,
        "tebak"
      );
      rl.close();
    }

    if (angka > sistem) {
      berpaKaliTebak++;
      console.log("tebakan anda terlalu besar");
      return tebak();
    }

    if (angka < sistem) {
      berpaKaliTebak++;
      console.log("tebakan anda terlalu kecil");
      return tebak();
    }

    rl.close();
  });
}

tebak();
