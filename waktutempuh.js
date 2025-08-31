function hitungwaktu() {
    let jarakTempuh = parseFloat(document.getElementById("jarak").value);
    let kecepatanrataRata = parseFloat(document.getElementById("kecepatan").value);

    let waktuJam = jarakTempuh / kecepatanrataRata;

    let waktuJamBulat = waktuJam.toFixed(2);

    document.getElementById("hasil").innerHTML =
    "Jarak yang di Tempuh: " + jarakTempuh + "km <br>" +
    "Kecepatan yang di Tempuh: " + kecepatanrataRata + "km/jam <br>" +
    "Waktu Tempuh: " + waktuJamBulat + " jam";
}