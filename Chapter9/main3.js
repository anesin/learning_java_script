$(document).ready(function() {
    'use strict';

    console.log('9.3 다중 상속, 믹스인, 인터페이스');

    {
        class InsurancePolicy {}
        function makeInsurable(o) {
            o.addInsurancePolicy = function(p) { this.insurancePolicy = p; }
            o.getInsurancePolicy = function() { return this.insurancePolicy; }
            o.isInsured = function() { return !!this.insurancePolicy; }
        }
    
        class Car {}
        console.log('makeInsurable(Car)');
        console.log(Car);
        makeInsurable(Car);
        console.log(Car);
    
        console.log('makeInsurable(car1)');
        const car1 = new Car();
        console.log(car1);
        // car1.addInsurancePolicy(new InsurancePolicy());
        makeInsurable(car1);
        console.log(car1);
        car1.addInsurancePolicy(new InsurancePolicy());
        console.log(car1);
    
        console.log('makeInsurable(Car.prototype)');
        console.log(Car);
        console.log(Car.prototype);
        makeInsurable(Car.prototype);
        console.log(Car);
        console.log(Car.prototype);
        const car2 = new Car();
        console.log(car2);
        car2.addInsurancePolicy(new InsurancePolicy());
        console.log(car2);
    }

    {
        class InsurancePolicy {}
        console.log('Symbol()');
        const ADD_POLICY = Symbol();
        const GET_POLICY = Symbol();
        const IS_INSURED = Symbol();
        const _POLICY = Symbol();
        function makeInsurable(o) {
            o[ADD_POLICY] = function(p) { this[_POLICY] = p; }
            o[GET_POLICY] = function() { return this[_POLICY]; }
            o[IS_INSURED] = function() { return !!this[_POLICY]; }
        }
    
        class Car {}
        console.log('makeInsurable(Car)');
        console.log(Car);
        makeInsurable(Car);
        console.log(Car);
    
        console.log('makeInsurable(car1)');
        const car1 = new Car();
        console.log(car1);
        makeInsurable(car1);
        console.log(car1);
        car1[ADD_POLICY](new InsurancePolicy());
        console.log(car1);
    
        console.log('makeInsurable(Car.prototype)');
        console.log(Car);
        console.log(Car.prototype);
        makeInsurable(Car.prototype);
        console.log(Car);
        console.log(Car.prototype);
        const car2 = new Car();
        console.log(car2);
        car2[ADD_POLICY](new InsurancePolicy());
        console.log(car2);
    }
})