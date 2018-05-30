class Shop4S {
    constructor() {
        this.yourCar = '';
        this.name = 'soho 五菱荣光4s店'
    }

    buyCar() {
        this.yourCar = 'mirador';

        console.log(`恭喜你获得了: ${this.yourCar}`);
    }

    fixCar() {
        console.log(`${this.yourCar} 修好了`);
    }

    saleCar() {
        this.yourCar = '';

        console.log(`${this.yourCar} 卖出去了`);
    }
}

class Meido4S {
    constructor() {
        this.shop = new Shop4S();
    }

    execute(service) {
        this.shop[service]();
    }
}