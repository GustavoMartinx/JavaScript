/*
    Array
        Uma Lista
        Agrupamento de Dados

    ex.:    ["Mayk", 36]


    ex.:    console.log([
               "Leite",
               "Ovos",
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
console.log(animals.length)

// Accessing propeties of an object inside of an array
console.log(animals[2].name)

// ! WARNING !   Misturar tipos de dados em um array é possível, porém não é aconselhavel, pois, podem ocorrer bugs