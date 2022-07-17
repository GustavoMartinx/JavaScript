/*
    Object
        (dado estrutural)
        Propriedades / Atributos
        Funcionalidades / Métodos

        { propriedade: "valor"}


    console.log({
        name: "Mayk",
        idade: 36,
        andar: function() {
            console.log('andar')
        }
    })

*/



// review

const person = {
    name: 'Mariana',
    age: 17,
    weight: 200,
    itsStinky: true,
    itsTheLoveOfMyLife: true
};

console.log(`A ${person.name} tem só ${person.age} anos e já pesa ${person.weight}Kg <3`);

// Print the object
console.log(person);

// or your values
console.log(person.name);
console.log(person.age);
console.log(person['age']);

// Creating a new key-value pair
person.year_birth = 2004;
console.log(person);

// Deleting an property
delete person.age;
console.log(person);

// Adding arrays to the object
person.hobbies = ['Music', 'Podcast', 'Photography'];
console.log(person);

// Adding dictionaries of arrays to the object
person.hard_skills = {
    languages: ['C', 'Python', 'Javascript'],
    frameworks: ['Angular', 'Vue']
};
// --------------------------------------------

var user = {
    say_hello: function(name) {
        return `Hello, ${name}!`;
    },
    // abstracted version
    say_hello_abstracted(name){
        return `Hello, ${name}!`;
    }
};
// same result
console.log(user.say_hello('Mari'));
console.log(user.say_hello_abstracted('Mari'));
// --------------------------------------------

// Assignin a variable to the object
var p_name = 'Mari';
var fav_book = 'Little Red Riding Hood';

var people = {
    name: p_name,
    fav_book: fav_book,
    // or
    p_name,
    fav_book
};
// -------------------------------------------

// Merging Objects
var tourist = {
    name: 'Ana',
    age: 17
};

var extra_info = {
    coutry: 'Brazil',
    state: 'Sao Paulo'
};

var new_user = Object.assign({}, tourist, extra_info);  // first param is the object target
console.log(new_user);

// Spreading
var new_tourist = {
    ...tourist,
    ...extra_info
};
console.log(new_tourist);
// -----------------------

var variable_name = 'Country';
var user2 =  {
    name: 'Gustavo',
    [variable_name]: 'Brazil' // variable value is the property name
}