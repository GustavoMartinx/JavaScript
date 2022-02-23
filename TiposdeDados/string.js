/*
    String  =>  sequence of characters

    ""  => aspas duplas
    ''  => aspas simples
    ``  => template literals ou template string (crases)

*/

// se tiver aspas dentro da string, devemos envolver a string com o outro tipo de aspas. Ex.:
console.log('Ma"yk')
// ou vice-versa
console.log("Ma'yk")
// com a template literals (crases) podemos fazer multilinhas. Ex.:
console.log(`
    Mayk
`)

// Interpolação:
console.log(`Mayk ${21 + 21}`)