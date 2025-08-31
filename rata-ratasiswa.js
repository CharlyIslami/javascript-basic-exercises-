function hitungRataRata() {
    let matematika = parseFloat(document.getElementById("nilaiMTK").value);
    let bahasaIndonesia = parseFloat(document.getElementById("nilaiBindo").value);
    let ipa = parseFloat(document.getElementById("nilaiIPA").value);

    let jumlahNilai = matematika + bahasaIndonesia + ipa;

    let rataRata = jumlahNilai / 3;

    let rataRataBulat = rataRata.toFixed(2);

    document.getElementById("hasil").innerHTML =
    "Nilai Matematika: " + matematika + "<br>" +
    "Nilai Bahasa Indonesia: " + bahasaIndonesia + "<br>" +
    "Nilai IPA: " + ipa + "<br>" +
    "Jumlah Nilai: " + jumlahNilai + "<br>" + 
    "Rata-rata: " + rataRataBulat;
}