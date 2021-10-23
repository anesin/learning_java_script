$(document).ready(function() {
    'use strict';

    console.log('9.2.1 클래스와 인스턴스 생성');
    {
        class Car {
            constructor() {}
        }
        const car1 = new Car();
        const car2 = new Car();
        console.log(car1 instanceof Car);
        console.log(car1 instanceof Array);
    }

    {
        class Car {
            constructor(make, model) {
                this.make = make;
                this.model = model;
                this.userGears = ['P', 'N', 'R', 'D'];
                this.userGear = this.userGears[0];
            }
            shift(gear) {
                if (this.userGears.indexOf(gear) < 0)
                    throw new Error(`Invalid gear: ${gear}`);
                this.userGear = gear;
            }
        }
        const car1 = new Car('Tesla', 'Model S');
        const car2 = new Car('Mazda', '3i');
        car1.shift('D');  console.log(car1.userGear);
        car2.shift('R');  console.log(car2.userGear);
    }

    {
        class Car {
            constructor(make, model) {
                this.make = make;
                this.model = model;
                this._userGears = ['P', 'N', 'R', 'D'];
                this._userGear = this._userGears[0];
            }
            get userGear() {
                return this._userGear;
            }
            set userGear(value) {
                if (this._userGears.indexOf(value) < 0)
                    throw new Error(`Invalid gear: ${value}`);
                this._userGear = value;
            }
            shift(gear) {
                this.userGear = gear;
            }
        }
        const car1 = new Car('Tesla', 'Model S');
        const car2 = new Car('Mazda', '3i');
        car1.shift('D');  console.log(car1.userGear);
        car2.shift('R');  console.log(car2.userGear);
    }

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
        const car1 = new Car('Tesla', 'Model S');
        const car2 = new Car('Mazda', '3i');
        car1.shift('D');  console.log(car1.userGear);
        car2.shift('R');  console.log(car2.userGear);
    }
})