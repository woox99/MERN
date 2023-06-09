// example 1
const cars = ['tesla', 'Mercdes', 'Honda'];
const [randomCar, otherRandomCar] = cars;

console.log(randomCar);
console.log(otherRandomCar);

// example 2
const employee = {
    name: 'elon',
    age: '47',
    company:'Tesla'
}

const { name:otherName} = employee

console.log(otherName)

// example 2

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: '1234'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// example 3
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);

// example 4
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);

