class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.accountBalance = 0;
    }
}

const rick = new User('drunk_rick', 'ricky@js.com');
const morty = new User('rickies_pet', 'mort@js.com');

console.log(rick.username);
console.log(morty.username);