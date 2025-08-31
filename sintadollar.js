function konversiDolar() {
    let dolar = parseFloat(document.getElementById("jumlahDolar").value);

    let kurs = 15000;

    let rupiah = dolar * kurs;

    document.getElementById("hasil").innerHTML = 
    dolar + " dolar = RP " + rupiah.toLocaleString('id-ID');
}