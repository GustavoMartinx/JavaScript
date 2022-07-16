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