$(document).ready(function() {
    'use strict';

    console.log('9.2.7 객체 프로퍼티 나열 다시 보기');
    {
        class Super {
            constructor() {
                this.name = 'Super';
                this.isSuper = true;
            }
        }
        Super.prototype.sneaky = 'not recommended!';
        class Sub extends Super {
            constructor() {
                super();
                this.name = 'Sub';
                this.isSub = true;
            }
        }
        const obj = new Sub();
        console.log('for (let p in obj)');
        for (let p in obj) {
            console.log(`\t${p}: ${obj[p]}` + (obj.hasOwnProperty(p)? '': ' (inherited)'));
        }
        console.log('for (let p of Object.keys(obj))');
        for (let p of Object.keys(obj)) {
            console.log(`\t${p}: ${obj[p]}` + (obj.hasOwnProperty(p)? '': ' (inherited)'));
        }
    }

    console.log('9.2.8 문자열 표현');
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
            toString() {
                return `${this.make} ${this.model}: ${this.vin}`;
            }
        }
        Car.nextVin = 0;

        const car1 = new Car('Tesla', 'S');  console.log(car1.toString());
        const car2 = new Car('Mazda', '3');  console.log(car2.toString());
        const car3 = new Car('Mazda', '3');  console.log(car3.toString());
    }
})