function bagiApel() {
    let totalApel = parseFloat(document.getElementById("jumlahApel").value);
    let totalKeranjang = parseFloat(document.getElementById("jumlahKeranjang").value);

    let apelPerKeranjang = Math.floor(totalApel / totalKeranjang);
    
    let sisaApel = totalApel % totalKeranjang;

    document.getElementById("hasil").innerHTML =
    "Total Apel adalah: " + totalApel + "<br>" +
    "Total Keranjang ada: " + totalKeranjang + "<br>" +
    "apel per Keranjang Sebanyak: " + apelPerKeranjang + "<br>" +
    "Sisa Apel yang Ada: " + sisaApel + "<br>" +
    "<b>Kesimpulan:</b><br>" +
    "Setiap Keranjang mendapat: " + apelPerKeranjang + " Apel" + "<br>" +
    "Tersisa: " + sisaApel + " Apel yang tidak terbagi";
}