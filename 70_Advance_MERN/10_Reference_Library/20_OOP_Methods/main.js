class User {
    constructor(username) {
        this.username = username
        this.accountBalance = 0
    }
    makeDeposit(amount) {
        this.accountBalance += amount;
    }
}

const garett = new User('garett');
console.log(garett.accountBalance);

garett.makeDeposit(100);
console.log(garett.accountBalance);