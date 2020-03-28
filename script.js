let yes = [
    'apakah mengalami gejala batuk, demam, sesak nafas?',
    'sudah lebih dari 4 hari atau belum?', 'apakah gejala semakin memburuk?',
    `Pernah mengunjungi Negara atau kota yang sudah terinfeksi 
    contohnya:China,Singapura,Malaysia
    ,Jakarta,Bekasi,Depok`,
    'Anda termasuk dalam pasien dengan kondisi BERAT, segerakan cek kesehatan di rumah sakit rujukan corona atau telepon hotline corona di 112/119'
]
let no = [
    'Alhamdulillah anda sehat, Lakukan Social Distancing dan perkuat imun tubuh anda dengan cara berolahraga dan makan makanan yang bergizi',
    'Anda termasuk dalam pasien dengan kondisi RINGAN lakukan isolasi mandiri, jika kondisi semakin buruk segera pergi ke fasilitas kesahatan untuk pemeriksaan lebih lanjut',
    'Berdasarkan data yang telah anda berikan maka anda termasuk ke dalam pasien dengan kondisi SEDANG, lakukan isolasi mandiri, dan jika kondisi semakin buruk segera pergi ke fasilitas kesahatan untuk pemeriksaan lebih lanjut', 'Berdasarkan data yang telah anda berikan maka anda termasuk ke dalam pasien dengan kondisi SEDANG, lakukan isolasi mandiri, dan jika muncul tanda-tanda seperti batuk, sesak nafas, demam, dll. segera pergi ke fasilitas kesahatan untuk pemeriksaan lebih lanjut'
]
let a = 0
let b = 0
const span = document.querySelector('.message span')
console.log(span)



function y() {
    if (a == 0) {
        ul.appendChild(button_yes)
        ul.appendChild(yes_0)
        a++
        console.log(a)
    } else if (a == 1) {
        ul.appendChild(yes_1)
        ul.appendChild(button_yes)
        a++
        console.log(a)
    } else if (a == 2) {
        ul.appendChild(yes_2)
        a++
        console.log(a)
    } else if (a == 3) {
        span.innerHTML = yes[3]
        a++

        console.log(a)
    } else if (a == 4) {
        span.innerHTML = yes[4]
        a++
        console.log(a)
        btnLight[0].disabled = true
        btnLight[1].disabled = true
    }
    if (a == 2 && b == 1) {
        span.innerHTML = no[3]
        btnLight[0].disabled = true
        btnLight[1].disabled = true

    }
    if (a == 4 && b == 1) {
        span.innerHTML = no[2]
    }
    if (a == 4 && b == 2) {
        span.innerHTML = no[2]
    }
}

function name() {
    if (a == 0) {
        span.innerHTML = no[0]
        console.log(a)
        btnLight[0].disabled = true
        btnLight[1].disabled = true
    } else if (a == 1) {
        span.innerHTML = yes[3]
        b++
        console.log(b)
    } else if (a == 2) {
        span.innerHTML = yes[3]
        b++
        console.log(b)
    } else if (a == 3) {
        span.innerHTML = yes[3]
        b++
    } else if (a == 4) {
        span.innerHTML = no[2]
        btnLight[0].disabled = true
        btnLight[1].disabled = true
    }
    if (b == 2) {
        span.innerHTML = no[1]
        b++
        btnLight[0].disabled = true
        btnLight[1].disabled = true
        console.log(b)
    }
}



const btnLight = document.querySelectorAll('button')
btnLight[0].addEventListener('click', function e() {
    y()
})


btnLight[1].addEventListener('click', function e() {
    name()
})


const button_yes = document.createElement('li')
const isi_button = document.createTextNode(`yes`)
button_yes.appendChild(isi_button)

button_yes.style.float = 'right'
const button = [button_yes]
button.forEach(e => button_yes.setAttribute('class', `${Date.now()}`))





// buat list dengan DOM
const yes_0 = document.createElement('li')
const isi_New_Li_0 = document.createTextNode(`${yes[0]}`)
yes_0.appendChild(isi_New_Li_0)
// tangkap parent
const ul = document.querySelector('.display li')
// masukkan element baru


const yes_1 = document.createElement('li')
const isi_New_Li_1 = document.createTextNode(`${yes[1]}`)
yes_1.appendChild(isi_New_Li_1)

const yes_2 = document.createElement('li')
const isi_New_Li_2 = document.createTextNode(`${yes[2]}`)
yes_2.appendChild(isi_New_Li_2)