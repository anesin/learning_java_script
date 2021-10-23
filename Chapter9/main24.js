$(document).ready(function() {
    'use strict';

    console.log('9.2.4 정적 메서드');
    {
        class Car {
            static getNextVin() {
                return Car.nextVin++;
            }
            constructor(make, model) {
                this.make = make;
                this.model = model;
                this.vin = Car.getNextVin();
            }
            static areSimilar(car1, car2) {
                return car1.make === car2.make && car1.model === car2.model;
            }
            static areSame(car1, car2) {
                return car1.vin === car2.vin;
            }
        }
        Car.nextVin = 0;

        const car1 = new Car('Tesla', 'S');
        const car2 = new Car('Mazda', '3');
        const car3 = new Car('Mazda', '3');

        console.log(Car.areSimilar(car1, car2));
        console.log(Car.areSimilar(car2, car3));
        console.log(Car.areSame(car2, car3));
        console.log(Car.areSame(car2, car2));
    }

    console.log('9.2.5 상속');
    {
        class Vehicle {
            constructor() {
                this.passengers = [];
                console.log('Vehicle created');
            }
            addPassenger(p) {
                console.log(`addPassenger ${p}`);
                this.passengers.push(p);
            }
        }
        class Car extends Vehicle {
            constructor() {
                super();
                console.log('Car created');
            }
            deployAirbags() {
                console.log('BWOOSH!');
            }
        }
        const v = new Vehicle();
        v.addPassenger('Frank');
        v.addPassenger('Judy');
        console.log(v.passengers);
        const c = new Car();
        c.addPassenger('Alice');
        c.addPassenger('Cameron');
        console.log(c.passengers);
        // v.deployAirbags();
        c.deployAirbags();

        console.log('9.2.6 다형성');
        {
            class Motorcycle extends Vehicle {}
            const c = new Car();
            const m = new Motorcycle();
            console.log(c instanceof Car);
            console.log(c instanceof Vehicle);
            console.log(m instanceof Car);
            console.log(m instanceof Motorcycle);
            console.log(m instanceof Vehicle);
        }
    }
})