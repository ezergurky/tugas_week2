const greetings = (nama) => console.log(`Halo ${nama}, Selamat siang. `);

const dataNilai = {
    matkul: "Algoritma Pemrograman",
    nilai: 98,
    status: "Lulus"
};

const dataTambahan = {
    semester: 1,
    aktif: true
};

const dataMahasiswa = {...dataNilai, ...dataTambahan};
console.log("Data Mahasiswa: ", dataMahasiswa);

greetings("Ezer");