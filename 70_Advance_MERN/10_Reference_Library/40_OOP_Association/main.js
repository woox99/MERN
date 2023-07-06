class BankAccount {
    constructor(intRate, balance=0){
        this.intRate = intRate;
        this.balance = balance;
    }
    makeDeposit(amount){
        this.balance += amount;
    }
    makeWithdraw(amount){
        this.balance -= amount;
    }
    displayAccountInfo(){
        console.log(`Balance: $${this.balance}`);
    }
    yieldInt(){
        this.balance += (this.balance * this.intRate);
    }
}

class User{
    constructor(username){
        this.username = username;
        this.savings = new BankAccount(.02);
        this.checkings = new BankAccount(0);
    }
}

const garett = new User('Garett');

garett.savings.makeDeposit(100);
garett.checkings.makeDeposit(50);

console.log(garett.savings.balance);
console.log(garett.checkings.balance);