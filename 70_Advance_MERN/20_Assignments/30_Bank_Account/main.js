class BankAccount {
    constructor(intRate, balance=0){
        this.intRate = intRate
        this.balance = balance
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

const acc = new BankAccount(.01);
acc.makeDeposit(100);
acc.displayAccountInfo();
acc.yieldInt();
acc.displayAccountInfo();



