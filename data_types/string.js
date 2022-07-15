/*
    String  =>  sequence of characters

    ""  => aspas duplas
    ''  => aspas simples
    ``  => template literals ou template string (crases)

*/

// se tiver aspas dentro da string, devemos envolver a string com o outro tipo de aspas. Ex.:
console.log('Ma"yk');
// ou vice-versa
console.log("Ma'yk");
// com a template literals (crases) podemos fazer multilinhas. Ex.:
console.log(`
    Mayk
`);

// Interpolation
// Interpolação
console.log(`Mayk ${21 + 21}`);
// ----------------------------


// Concatenation (String and Variables) and Print on Console
// Concatenação (String e Variáveis) e Print no Console
var name1 = "Gustavin";
var age = 18;
var age2 = 10;

console.log(name1);
console.log(age);

// (+) interpreted as string and performs concatenation
// (+) é nterpretado como string e realiza a concatenação
alert(name1 + " tem " + age + " anos");
// (+) is interpreted as an integer and performs the arithmetic operation
// (+) é interpretado como número inteiro e realiza a operação aritmética
alert(age + age2);

// Arithimetic Operations
// Operações Aritiméticas
var n1 = 10;
var n2 = 2;
res = n1 * n2;
console.log(res);


// Strings handling functions
// Funções para manipulação de strings
var phrase = "O Lamia é muito foda"
console.log(phrase);
console.log(phrase.replace("foda", "importante pra mim"));
console.log(phrase.toLowerCase());
console.log(phrase.toUpperCase());