class User {
    constructor(username) {
        this.username = username
        this.balance = 0
    }
    makeDeposit(amount){
        this.balance += amount;
        return this;
    }
    makeWithdraw(amount){
        this.balance -= amount;
        return this;
    }
    displayBalance(){
        console.log(`Name: ${this.username}, Balance: $${this.balance}`)
        return this;
    }
    moneyTransfer(recipient, amount){
        this.balance -= amount;
        recipient.balance += amount;
        console.log(`$${amount} has been transfered from ${this.username} to ${recipient.username}.`)
        this.displayBalance();
        recipient.displayBalance();
        return this;
    }
}

const garett = new User('Garett');
const kyle = new User('Kyle');
const tj = new User('TJ');

garett.makeDeposit(100);
garett.makeWithdraw(25);

garett.displayBalance();

garett.moneyTransfer(kyle, 10);

// Chaining
garett.makeDeposit(1).makeDeposit(1);
console.log(garett.balance);

