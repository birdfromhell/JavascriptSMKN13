let nama = "kelvi"
let negara = "nagreg"

if (nama === null || nama === "") {
    console.log("Data Kosong")
} else if (negara === null || negara === ""){
    console.log("Data kosong")
} else {
    switch (negara) {
        case "Indonesia":
            console.log(`Selamat Pagi, ${nama}!`)
            break
        case "Inggris":
            console.log(`Good Morning, ${nama}!`)
            break
        case "Jepang":
            console.log(`Ohayou Gozaimasu, ${nama}!`)
            break
        case "Jerman":
            console.log(`Guten Morgen, ${nama}!`)
            break
        default:
            console.log(`Selamat datang, ${nama}!`)
    }
}

