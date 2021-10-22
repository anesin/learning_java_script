$(document).ready(function() {
    'use strict';

    function sayHello() {
        console.log('Hello world!');
        console.log('¡Hola mundo!');
        console.log('Hallo wereld!');
        console.log('Привет мир!');
    }
    sayHello();

    function getGreeting() {
        return 'Hello world!';
    }
    console.log('getGreeting() =', getGreeting());
    console.log('getGreeting =', getGreeting);

    const f = getGreeting;
    console.log('f() =', f());

    const o = {};
    o.f = getGreeting;
    console.log('o.f() =', o.f());

    const arr = [1, 2, 3];
    arr[1] = getGreeting;
    console.log('arr[1]() =', arr[1]());
});
