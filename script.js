let yes = [
    'apakah mengalami gejala batuk, demam, sesak nafas?',
    'sudah lebih dari 4 hari atau belum?', 'apakah gejala semakin memburuk?',
    'Pernah mengunjungi Negara atau kota yang sudah terinfeksi contohnya:China,Singapura,Malaysia,Jakarta,Bekasi,Depok',
    'Anda termasuk dalam pasien dengan kondisi BERAT, segerakan cek kesehatan di rumah sakit rujukan corona atau telepon hotline corona di 112/119'
]
let no = [
    'Alhamdulillah anda sehat, Lakukan Social Distancing dan perkuat imun tubuh anda dengan cara berolahraga dan makan makanan yang bergizi',
    'Anda termasuk dalam pasien dengan kondisi RINGAN lakukan isolasi mandiri, jika kondisi semakin buruk segera pergi ke fasilitas kesahatan untuk pemeriksaan lebih lanjut',
    'Berdasarkan data yang telah anda berikan maka anda termasuk ke dalam pasien dengan kondisi SEDANG, lakukan isolasi mandiri, dan jika kondisi semakin buruk segera pergi ke fasilitas kesahatan untuk pemeriksaan lebih lanjut'
]

const span = document.querySelector('.message span')
console.log(span)

const btnLight = document.querySelectorAll('button')
btnLight[0].addEventListener('click', function e() {
    y()
})


btnLight[1].addEventListener('click', function e() {
    name()
})


let a = 0

function y() {
    if (a == 0) {
        span.innerHTML = yes[0]
            ++a
    } else if (a == 1) {
        span.innerHTML = yes[1]
        a += 2
    } else if (a == 2) {
        span.innerHTML = yes[2]
            ++a
    } else if (a == 3) {
        span.innerHTML = no[2]
            ++a
    } else if (a == 4) {
        span.innerHTML = yes[4]
            ++a
    } else if (a == 5) {
        span.innerHTML = no[2]

    }
    console.log(a)
}

function name() {
    console.log(a)
    if (a == 0) {
        span.innerHTML = no[0]
        btnLight[0].disabled = true;
    } else if (a == 1) {
        span.innerHTML = yes[3]
        // btnLight[0].disabled = true;
        a += 2
    } else if (a == 2) {
        span.innerHTML = yes[3]
        // btnLight[0].disabled = true;
        a++
    } else if (a == 3) {
        span.innerHTML = no[1]

    } else if (a == 4) {
        span.innerHTML = no[2]
        btnLight[0].disabled = true;
        btnLight[1].disabled = true;
    } else if (a == 5) {
        span.innerHTML = no[1]
        btnLight[0].disabled = true;
        btnLight[1].disabled = true;
    }
}