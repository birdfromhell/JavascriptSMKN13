let isRaining = false
console.log("Persiapan berangkat")
if (isRaining) {
    console.log("Pakai payung.")
}
console.log("Berangkat")

let gender = 'bencong'
if (gender.toLowerCase() === 'laki-laki') {
    console.log('Ganteng')
} else if (gender.toLowerCase() === 'perempuan') {
    console.log('Cantik')
} else {
    console.log("Kamu siapa?")
}

let teori = 60
let praktek = 80
if (teori >= 80){
    if (praktek >= 80){
        console.log("Selamat, kamu lulus!")
    } else {
        console.log("Tidak Lulus")
    }
}else{
    console.log("Tidak Lulus")
}