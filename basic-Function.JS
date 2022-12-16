
// basic function ( r sebagai parameter , dan 3.14 * (r**2) sebagai prosedur)
function luasLingkaran (r){
    return 3.14 * (r**2) 
}
console.log(luasLingkaran(10));

// function dengan const atau deklarasi variable
function penjumlahan(a, b) { // ini fungsi + nama fungsi serta parameternya 
    const result = a + b // ini deklarasi constanta atau variablenya
    return result // memanggil kembali hasil dari konstanta yang sudah dideklarasi
}

// menambahkan const dalam function #2
function luasLingkaran (r){
    const phi = 3.14
    return phi * (r**2) 
}
console.log(luasLingkaran(10));

// callback adalah suatu fungsi yang parameternya menggunakan atau memanggil fungsi lain
function otherFunc() {
    return "Hello World"
}

// anonymous function = function yg gapunya nama
const res = ( (args) => {
    return "Hello World " + args
})
console.log(res("qodier"));

// based function in js
function nameOfFunction(args) {
    return "Hello" + args
}

// anonym function
const nameOfFunctionWithAnonym = function(args) {
    return "Hello" + args
}

// contoh anonymous function 2
const Anonim = function(args) { // anonimnya ada pada function(args) (karena setelah function tidak ada namanya)
    return "hello " + args
}

console.log(Anonim("qodier"));


// arrow function
const nameOfFunctionWithArrow = (args) => {
    return "Hello " + args
}

console.log(nameOfFunctionWithArrow("qodier"))

// contoh arrow function dengan anonimous 2
const anonimArrow = (args1) => {
    return "hello " + args1
}

console.log(anonimArrow("qodier lagi"))

// console.log(nameOfFunction(" World"))
// console.log(nameOfFunctionWithAnonym(" World"))
// console.log(nameOfFunctionWithArrow(" World"))

//fungsi tanpa constanta/variable
function sapaan (namaUser){
    return "hallo " + namaUser + " selamat datang";
}
console.log(sapaan("qodier")); // log hasil dari fungsi sapaan()

// fungsi dengan constanta/variable di dalamnya
function sapaan1 (namaUser1){
    const result = "hallo " + namaUser1 + " selamat datang di ruang belajar"; 
    return result;
}

console.log(sapaan1("fahma"))

// latihan studi kasus
function batasUsia(umur){
    if (umur < 13){
        console.log("maaf usia anda kurang boss")
    } else if ( umur > 13){
        console.log("silahkan masukan umur anda")
    }
}

batasUsia(15); // menjalankan fungsi batasanUsia

// fungsi callback
const panggilan = (args) => { return "hallo " +  args}
console.log(panggilan("wodire"));

const panggilan2 = (panggilan("qodier")) => {return "ini adalah hasil panggilan" + panggilan2}
