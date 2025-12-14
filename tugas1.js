function buatTeh(gula) {
    return new Promise((resolve, reject) => {
        console.log("⏳ Sedang merebus air... (Tunggu 2 detik)");

        setTimeout(() => {
            if(gula == "Gula Batu") {
                resolve("✅ Teh Gula Batu Siap dinikmati!");
            } else {
                reject("❌ Maaf, stok gula habis.");
            }
        }, 2000);
    });
}

buatTeh("Gula Batu")
    .then((sukses) => console.log(sukses))
    .catch((error) => console.log(error))