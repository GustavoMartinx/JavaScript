// Functions
/*
function sum(n1, n2) {
    return n1 + n2; 
}
console.log(sum(9, 1));
*/

//----------------------

/*
var validar;

function valida_idade(idade) {
    // var validar;   se validar for redeclarada dentro da função, será interpretada como uma nova variável, se for declarada apenas fora, interpretar-se-á como variável global
    if (idade >= 18) {
        validar = "pode beber";
        return validar;
    } else {
        validar = "nao pode beber"
    }
}

var idade = prompt("Qual sua idade?");
valida_idade(idade);
console.log(validar);
*/

//---------------------------

// function button
function clicked() {
    // alert("Thanks for click!");
    // console.log(document.getElementById("thanks"));
    document.getElementById("github_button").innerHTML = "<b>check my Github!</b>";
}

function redirect() {
    window.open("https://github.com/GustavoMartinx");
}

function change(element) {
    // document.getElementById("mouse_move").innerHTML = "Thanks by mouse here";
    element.innerHTML = "Thanks by mouse here";
}

function back(element) {
    // document.getElementById("mouse_move").innerHTML = "mouse over here";
    element.innerHTML = "mouse over here";
}

function load() {
    alert("Loaded Page");
}

function funct_change(element) {
    console.log(element.value);
}