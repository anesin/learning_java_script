$(document).ready(function() {
    'use strict';

    console.log('12.2 제너레이터');
    {
        function* rainbow() {
            yield 'red';
            yield 'oragne';
            yield 'yellow';
            yield 'green';
            yield 'blue';
            yield 'indigo';
            yield 'violet';
        }

        const it = rainbow();
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());

        for (let color of rainbow())
            console.log(color);
    }

    console.log('12.2.1 yield 표현식과 양방향 통신');
    {
        function* interrogate() {
            const name = yield 'What is your name?';
            const color = yield 'What is your favorite color?';
            return `${name}'s favorite color is ${color}.`;
        }
        const it = interrogate();
        console.log(it.next());
        console.log(it.next('Ethan'));
        console.log(it.next('orange'));
    }

    console.log('12.2.2 제너레이터와 return');
    {
        function* abc() {
            yield 'a';
            yield 'b';
            return 'c';
        }

        const it = abc();
        console.log(it.next());
        console.log(it.next());
        console.log(it.next());

        for (let l of abc())
            console.log(l);
    }
})