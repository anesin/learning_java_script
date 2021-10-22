$(document).ready(function () {
    'use strict';

    {
        function f(x) { return x + 3; }
        console.log(`f(5) = ${f(5)}`);
        // console.log(`x = ${x}`);
    }

    {
        function f1() { console.log('one'); }
        function f2() { console.log('two'); }
        f2();
        f1();
        f2();
    }

    // {
    //     const x = 3;
    //     function f() {
    //         console.log(x);
    //         console.log(y);
    //     }
    //     {
    //         const y = 5;
    //         f();
    //     }
    // }

    {
        let name = 'Irena', age = 25;
        function greet() { console.log(`Hello, ${name}!`); }
        function getBirthYear() { return new Date().getFullYear() - age; }
        greet();
        console.log(`getBirthYear() = ${getBirthYear()}`);
    }

    {
        let user = { name: 'Irena', age: 25 };
        function greet() { console.log(`Hello, ${user.name}!`); }
        function getBirthYear() { return new Date().getFullYear() - user.age; }
        greet();
        console.log(`getBirthYear() = ${getBirthYear()}`);
    }

    {
        let user = { name: 'Irena', age: 25 };
        function greet(user) { console.log(`Hello, ${user.name}!`); }
        function getBirthYear(user) { return new Date().getFullYear() - user.age; }
        greet(user);
        console.log(`getBirthYear(user) = ${getBirthYear(user)}`);
    }

    {
        console.log('before block');
        {
            console.log('inside block');
            const x = 3;
            console.log(x);
        }
        // console.log(`outside block: x=${x}`);
    }
})