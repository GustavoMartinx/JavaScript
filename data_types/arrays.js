/*
    Array
        Uma Lista
        An List
        Agrupamento de Dados
        Data Grouping

    ex.:    ["Mayk", 36]


    ex.:    console.log([
               "Milk",
               "Eggs",
                2,
                3
            ])
*/

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3
    }
]

// Accessing values within an array
// Get the array position (array position start in 0)
console.log(animals[0])

// Total array elements
// Total de elementos da lista
console.log(animals.length)

// Accessing propeties of an object inside of an array
// Acessando propriedades de um objeto dentro de uma lista
console.log(animals[2].name)
// ! WARNING !
// Mixing data types in an array is possible, but not advisable, as bugs may occur
// Misturar tipos de dados em um array é possível, porém não é aconselhavel, pois, podem ocorrer bugs

// Add an element to the list 
// Adiciona um elemento à lista
animals.push("Shark");
console.log(animals);

// Remove the last one
// Remove o último elemento da lista
console.log(animals.pop());

// Print elements in reverse order
// Imprime os elementos na ordem inversa
console.log(animals.reverse());

// Convert list to string
// Transforma a lista em uma string
console.log(animals.toString());
// perceive the diference of return
// perceba a diferença do retorno
console.log(animals[0]);

// Indicate what use as a separator between each element of the array
// Indica o que usar como separador entre cada elemento da lista
console.log(animals.join(" | "));