$(document).ready(function() {
    'use strict';

    console.log('9.2.2 클래스는 함수다');
    {
        function Car(make, model) {
            this.make = make;
            this.model = model;
            this._userGears = ['P', 'N', 'R', 'D'];
            this._userGear = this._userGears[0];
        }
        console.log(typeof Car);

        class Es6Car {}
        function Es5Car() {}
        console.log(typeof Es6Car);
        console.log(typeof Es5Car);
    }

    console.log('9.2.3 프로토타입');
    {
        const Car = (function() {
            const carProps = new WeakMap();

            class Car {
                constructor(make, model) {
                    this.make = make;
                    this.model = model;
                    this._userGears = ['P', 'N', 'R', 'D'];
                    carProps.set(this, {userGear: this._userGears[0]});
                }
                get userGear() {
                    return carProps.get(this).userGear;
                }
                set userGear(value) {
                    if (this._userGears.indexOf(value) < 0)
                        throw new Error(`Invalid gear: ${value}`);
                    carProps.get(this).userGear = value;
                }
                shift(gear) {
                    this.userGear = gear;
                }
            }

            return Car;
        })();
        const car1 = new Car();
        const car2 = new Car();
        console.log(car1.shift === Car.prototype.shift);
        console.log(car1.userGear);
        car1.shift('D');
        // car1.shift('d');
        console.log(car1.userGear);
        console.log(car1.shift === car2.shift);

        car1.shift = function(gear) { this.userGear = gear.toUpperCase(); }
        console.log(car1.shift === Car.prototype.shift);
        console.log(car1.shift === car2.shift);
        console.log(car1.userGear);
        car1.shift('d');
        console.log(car1.userGear);
    }
})