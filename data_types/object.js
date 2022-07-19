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
// --------------------------

// Getters and Setters
var users = [
    {
        name: 'Gustavo',
        age: '18'
    },
    {
        name: 'Mari',
        age: '18'
        
    },
    {
        name: 'Ana',
        age: '20'
        
    }
]

var other_user = {
    position: 0,
    get current() {   // get pegar retornar. Na chamada, tratar como property e não como function() 
        return users[this.position];
    },
    set current(position) {  //  set definir. Na chamada, tratar como assignment
        this.position = position;
    },
    next() {
        ++this.position;
    },
    previous() {
        --this.position;
    }
}

console.log(other_user.current);  // { name: 'Gustavo', age: '18' }

other_user.next();
console.log(other_user.current);  // { name: 'Mari', age: '18' }

other_user.next();
console.log(other_user.current);  // { name: 'Ana', age: '20' }

other_user.previous();
console.log(other_user.current);  // { name: 'Mari', age: '18' }

other_user.current = 0;
console.log(other_user.current);  // { name: 'Gustavo', age: '18' }
// -----------------------------

var variable_name = 'Country';
var user2 =  {
    name: 'Gustavo',
    [variable_name]: 'Brazil'  // variable value is the property name
}
// -----------------------------

// Extracting from object x (person) an property z (weight) 
var nome = person.name;
console.log(nome);

var { weight } = person;
console.log(weight);

// and assing this property to a variable with different name
var { itsTheLoveOfMyLife: honey } = person;
console.log(honey);
// ---------------------

// Nesting
var dev = {
    name: {
        first: 'Gustavo'
    }
};

// from the outside in
// de fora p dentro
var { name: { first } } = dev;
console.log(first);

// Property created
var { name: { least = 'Martins' } } = dev;  // value default to fallback. If defined in object, htan this will not overwrite
console.log(least);
// ---------------------

// Passing specific properties of an object to the function
var user_function = {
    name: 'Gustavo',
    height: '1,75',
    eyes_color: 'Borwn'
};

function print_user({ name, height}) {
    console.log(name);
    console.log(height);
}

print_user(user_function);

// show each propertys of the object
console.log(Object.keys(user_function));

// show each values of the object
console.log(Object.values(user_function));

// Looping through all properties with a normal for loop
var props = Object.keys(user_function);

for(var i = 0; i < props.length; i++) {
   console.log(props[i]);  // percorrendo o array props (chaves)
   console.log(user_function[props[i]]); // pegando todos os valores de cada chave
}
// with a for of
for(var prop of props) {
    console.log(user_function[prop]);

}
// and with for in
for(var prop2 in user_function) {
    if(user_function.hasOwnProperty(prop2)) {  // hasOwnProperty to ensure that iteration does not consider properties that are not of that object (inheritance, for example)
        console.log(user_function[prop2]);
    }
}