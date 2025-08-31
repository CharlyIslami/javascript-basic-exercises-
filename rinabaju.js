function hitungdiskon() {
    let hargaAwal = parseFloat(document.getElementById("hargaAsli").value);
    let persentaseDiskon = parseFloat(document.getElementById("persenDiskon").value);

    let jumlahDiskon = hargaAwal * (persentaseDiskon / 100);

    let hargaSetelahDiskon = hargaAwal - jumlahDiskon;

    let hargaAwalFormat = hargaAwal.toLocaleString('id-ID');
    let jumlahDiskonFormat = jumlahDiskon.toLocaleString('id-ID');
    let hargaFinalFormat = hargaSetelahDiskon.toLocaleString('id-ID');

    document.getElementById("hasil").innerHTML =
    "<b>Detail Perhitungan:</b><br>" +
    "Harga Asli: Rp " + hargaAwal + "<br>" +
    "Diskon " + persentaseDiskon + "%: Rp " + jumlahDiskonFormat + "<br>" +
    "Harga setelah diskon: " + "<b> Rp" + hargaFinalFormat;
}