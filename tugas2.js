async function getTodo() {
    try {
        console.log("Mencoba mengambil data...");

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        const { title } = data;

        console.log("✅ Judul Todo:", title);
    } catch(error) {
        console.log("Gagal mengambil data: ", error.message);
    } finally {
        console.log("--- Proses Selesai ---");
    }
}

getTodo();