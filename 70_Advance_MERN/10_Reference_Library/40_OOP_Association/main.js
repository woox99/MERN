class BankAccount {
    constructor(intRate, balance=0){
        this.intRate = intRate
        this.balance = balance
    }
    makeDepost(amount){
        this.balance += amount;
    }
}

class User {
    constructor(username){
        this.username = username
        this.bankAccount = new BankAccount(.02, 100)
    }
}

const garett = new User('Garett');
console.log(garett.bankAccount.balance);

garett.bankAccount.makeDepost(50);
console.log(garett.bankAccount.balance);