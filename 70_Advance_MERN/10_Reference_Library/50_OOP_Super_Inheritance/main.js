// Parent Class
class Vehicle {
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
        this.milage = 0;
    }
    parentFunction(){
        console.log('This is a parent function');
        return null;
    }
}

// Child class that inherits
class Ford extends Vehicle {
    constructor(color){
        super('Ford', 'Edge', color);
    }
    childFunction(){
        const message = super.parentFunction();
        console.log(message);
    }
}

const ford = new Ford('white');

// calls the parent function through the child function using super
ford.childFunction();

