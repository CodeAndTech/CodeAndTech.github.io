let yes = [
    'apakah mengalami gejala batuk, demam, sesak nafas?',
    'sudah lebih dari 4 hari atau belum?', 'apakah gejala semakin memburuk?',
    `Pernah mengunjungi Negara atau kota yang sudah terinfeksi, 
    contohnya:China,Singapura
    ,Malaysia
    ,Jakarta,Bekasi,Depok`,
    `Anda termasuk dalam pasien dengan kondisi BERAT, segerakan cek kesehatan di rumah sakit rujukan corona atau telepon hotline corona di 112/119`
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

        ul.appendChild(yes_0)
        a++
        console.log(a)
    } else if (a == 1) {

        ul.appendChild(yes_1)

        a++
        console.log(a)
    } else if (a == 2) {
        ul.appendChild(yes_2)
        a++
        console.log(a)
    } else if (a == 3) {
        ul.appendChild(yes_3)
        a++

        console.log(a)
    } else if (a == 4) {
        yes_4.style.backgroundColor = 'rgb(168, 42, 59)'
        ul.appendChild(yes_4)
        parent_button.appendChild(button_reefresh)
        btnLight[0].disabled = true
        btnLight[1].disabled = true
        a++
        console.log(a)
    }
    if (a == 2 && b == 1) {
        yes_1.style.display = 'none'
        no_3.style.backgroundColor = 'rgb(196, 206, 64)'
        ul.appendChild(no_3)
        parent_button.appendChild(button_reefresh)
        btnLight[0].disabled = true
        btnLight[1].disabled = true

    }
    if (a == 4 && b == 1) {

        ul.appendChild(no_2)
    }
    if (a == 4 && b == 2) {
        ul.appendChild(no_2)
    }
}

function name() {
    if (a == 0) {
        ul.appendChild(no_0)
        parent_button.appendChild(button_reefresh)
        console.log(a)
        btnLight[0].disabled = true
        btnLight[1].disabled = true
    } else if (a == 1) {
        ul.appendChild(yes_3)
        b++
        console.log(b)
    } else if (a == 2) {
        ul.appendChild(yes_3)
        b++
        console.log(b)
    } else if (a == 3) {
        ul.appendChild(yes_3)
        b++
    } else if (a == 4) {
        ul.appendChild(no_2)
        parent_button.appendChild(button_reefresh)
        btnLight[0].disabled = true
        btnLight[1].disabled = true
    }
    if (b == 2) {
        no_1.style.backgroundColor = 'rgb(96, 196, 109)'
        ul.appendChild(no_1)
        parent_button.appendChild(button_reefresh)
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


// const button_yes = document.createElement('li')
// const isi_button = document.createTextNode(`yes`)
// button_yes.appendChild(isi_button)

// button_yes.style.float = 'right'
// const button = [button_yes]
// button.forEach(e => button_yes.setAttribute('class', `${Date.now()}`))
const parent_button = document.querySelector('.button')
const button_reefresh = document.createElement('button')
const isi_button = document.createTextNode('Try again..')
button_reefresh.appendChild(isi_button)
button_reefresh.classList.add('btn-primary')
button_reefresh.addEventListener('click', function (e) {
    return window.location.reload()
})

const link_rujukan = document.createElement('a')
const isi_link = document.createTextNode(' . Informasi lebih lanjut bisa klik disini')
link_rujukan.appendChild(isi_link)
link_rujukan.setAttribute('href', `https://www.covid19.go.id/`)

const link_rujukan_1 = document.createElement('a')
const isi_link_1 = document.createTextNode(' . Informasi lebih lanjut bisa klik disini')
link_rujukan_1.appendChild(isi_link_1)
link_rujukan_1.setAttribute('href', `https://www.covid19.go.id/`)

const link_rujukan_2 = document.createElement('a')
const isi_link_2 = document.createTextNode(' . Informasi lebih lanjut bisa klik disini')
link_rujukan_2.appendChild(isi_link_2)
link_rujukan_2.setAttribute('href', `https://www.covid19.go.id/`)

const link_rujukan_3 = document.createElement('a')
const isi_link_3 = document.createTextNode(' . Informasi lebih lanjut bisa klik disini')
link_rujukan_3.appendChild(isi_link_3)
link_rujukan_3.setAttribute('href', `https://www.covid19.go.id/`)

const link_rujukan_4 = document.createElement('a')
const isi_link_4 = document.createTextNode(' . Informasi lebih lanjut bisa klik disini')
link_rujukan_4.appendChild(isi_link_4)
link_rujukan_4.setAttribute('href', `https://www.covid19.go.id/`)





// buat list dengan DOM
const yes_0 = document.createElement('span')
const isi_New_Li_0 = document.createTextNode(`${yes[0]}`)
yes_0.appendChild(isi_New_Li_0)
// tangkap parent
const ul = document.querySelector('.display')
// masukkan element baru


const yes_1 = document.createElement('span')
const isi_New_Li_1 = document.createTextNode(`${yes[1]}`)
yes_1.appendChild(isi_New_Li_1)

const yes_2 = document.createElement('span')
const isi_New_Li_2 = document.createTextNode(`${yes[2]}`)
yes_2.appendChild(isi_New_Li_2)

const yes_3 = document.createElement('span')
const isi_New_Li_3 = document.createTextNode(`${yes[3]}`)
yes_3.appendChild(isi_New_Li_3)


const yes_4 = document.createElement('span')
const isi_New_Li_4 = document.createTextNode(`${yes[4]}`)
yes_4.appendChild(isi_New_Li_4)
yes_4.appendChild(link_rujukan_1)


const no_0 = document.createElement('span')
const isi_New_no_0 = document.createTextNode(`${no[0]}`)
no_0.appendChild(isi_New_no_0)
no_0.appendChild(link_rujukan)


const no_1 = document.createElement('span')
const isi_New_no_1 = document.createTextNode(`${no[1]}`)
no_1.appendChild(isi_New_no_1)
no_1.appendChild(link_rujukan_2)

const no_2 = document.createElement('span')
const isi_New_no_2 = document.createTextNode(`${no[2]}`)
no_2.appendChild(isi_New_no_2)
no_2.appendChild(link_rujukan_3)

const no_3 = document.createElement('span')
const isi_New_no_3 = document.createTextNode(`${no[3]}`)
no_3.appendChild(isi_New_no_3)
no_3.appendChild(link_rujukan_4)