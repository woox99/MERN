// An anonymous function is simply a function without a name
function sayHello(name) {
    console.log(`hello ${name}`);
}

var sayHello2 = function (name) {
    console.log(`hello ${name}`);
}

// arrow function
const sayHello3 = (name) => {
    console.log(`Hello ${name}`);
};

//short hand 1 line arrow func
const sayHello4 = name => console.log(`hello ${name}`)

sayHello("garett");
sayHello2("garett");
sayHello3("garett");
sayHello4("garett");


class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        var deck = [];
        suits.forEach(suit => {
            faces.forEach(face => {
                deck.push(this.createCard(suit, face));
            });
        });
        this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}


var myDeck = new Deck();
console.log(myDeck);