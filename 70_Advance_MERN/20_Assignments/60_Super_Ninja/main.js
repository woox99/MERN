class ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`Ninja: ${this.name}`);
        console.log(`Health: ${this.health}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Strength: ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
        console.log(`${this.name} drinks sake: Health +10`)
    }
}

class sensei extends ninja{
    constructor(name){
        super(name, 200);
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom(){
        console.log(`${this.name} speaks words of wisdom.`)
        super.drinkSake()
    }
}

const ninja1 = new ninja('Brad', 100);
const sensei1 = new sensei('Ben');

sensei1.speakWisdom();
console.log(sensei1);
