//  .map() will make a copy of an array and apply our own twist to it
//  try to avoid for loops if you can simply use .map()
const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );

console.log(cubes);


// .filter() returns either true or false for each element in the array
const values2 = [1, 2, 3, 4, 5];
const evens = values2.filter( val => val % 2 === 0 );
console.log(evens);

const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods)

// combining .filter() and .map
const values3 = [1, 2, 3, 4, 5];
const oddCubes = values3.filter( val => val % 2 !==0 ).map( val => val**3 );