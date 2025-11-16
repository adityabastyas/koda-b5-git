// Koda ingin membuat suatu sistem login dengan menggunakan username dan password. Pengguna akan mendapatkan maksimal 3 kali kesempatan untuk memasukkan username dan password sebelum sistem menutup. Jika pengguna melakukan kesalahan, maka sistem akan memberikan pesan yang mendeskripsikan kesalahan yang dilakukan user. Tuliskan kode javascript dari permasalahan tersebut!

// const validCreds = [
//   {
//     username: "andi",
//     password: "root",
//   },
//   {
//     username: "cindy",
//     password: "r00t",
//   },
// ];

import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const validCreds = [
  { username: "andi", password: "root" },
  { username: "cindy", password: "r00t" },
];

const uAndi = validCreds[0].username;
const pAndi = validCreds[0].password;

const uCindy = validCreds[1].username;
const pCindy = validCreds[1].password;

let percobaan = 0;
let max = 3;

function user() {
  if (percobaan >= max) {
    console.log("Sistem Tutup");
    rl.close();
    return;
  }

  rl.question("Masukikan username : ", (inputUsername) => {
    rl.question("Masukkan password : ", (inputPassword) => {
      if (inputUsername === uAndi && inputPassword === pAndi) {
        console.log("Selamat Datang");
        rl.close();
        return;
      }

      if (inputUsername === uCindy && inputPassword === pCindy) {
        console.log("Selamat Datang");
        rl.close();
        return;
      }

      console.log("username atau password salah");
      percobaan++;
      user();
    });
  });
}

user();
