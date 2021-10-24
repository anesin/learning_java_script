$(document).ready(function() {
    'use strict';

    console.log('13.6 변수로서의 함수');
    {
        function addThreeSquareAddFiveTakeSquareRoot(x) {
            return Math.sqrt(Math.pow(x + 2, 2) + 5);
        }

        const answer1 = (addThreeSquareAddFiveTakeSquareRoot(5) +
                         addThreeSquareAddFiveTakeSquareRoot(2))/
                         addThreeSquareAddFiveTakeSquareRoot(7);
        console.log(answer1);
        const f = addThreeSquareAddFiveTakeSquareRoot;
        const answer2 = (f(5) + f(2))/f(7);
        console.log(answer2);
    }
    // {
    //     const Money = require('math-money');
    //     const oneDollar = Money.Dollar(1);
    //     console.log(oneDollar);
    //     const Dollar = Money.Dollar;
    //     const twoDollars = Dollar(2);
    //     console.log(twoDollars);
    // }

    console.log('13.6.1 배열 안의 함수');
    {
        const sin = Math.sin;
        const cos = Math.cos;
        const theta = Math.PI / 4;
        const zoom = 2;
        const offset = [1, -3];

        const pipeline = [
            function rotate(p) {
                return {
                    x: p.x*cos(theta) - p.y*sin(theta),
                    y: p.x*sin(theta) + p.y*cos(theta),
                };
            },
            function scale(p) {
                return {x: p.x*zoom, y: p.y*zoom};
            },
            function translate(p) {
                return {x: p.x + offset[0], y: p.y + offset[1]};
            },
        ];
        console.log(pipeline);

        const p = {x: 1, y: 1};
        console.log(p);
        let p2 = p;
        console.log(p2);
        for (let i = 0; i < pipeline.length; ++i) {
            p2 = pipeline[i](p2);
            console.log(p2);
        }
        console.log(p);
    }

    console.log('13.6.2 함수에 함수 전달');
    function sum(arr, f) {
        if (typeof f != 'function')
            f = x => x;
        return arr.reduce((a, x) => a += f(x), 0);
    }
    console.log('sum([1, 2, 3]) =',
                    sum([1, 2, 3]));
    console.log('sum([1, 2, 3], x => x * x) =',
                    sum([1, 2, 3], x => x * x));
    console.log('sum([1, 2, 3], x => Math.pow(x, 3)) =',
                    sum([1, 2, 3], x => Math.pow(x, 3)));

    console.log('13.6.3 함수를 반환하는 함수');
    // function sumOfSquares(arr) {
    //     return sum(arr, x => x * x);
    // }
    function newSummer(f) {
        return arr => sum(arr, f);
    }
    const sumOfSquares = newSummer(x => x*x);
    const sumOfCubes = newSummer(x => Math.pow(x, 3));
    console.log('sumOfSquares([1, 2, 3]) =', sumOfSquares([1, 2, 3]));
    console.log('sumOfCubes([1, 2, 3]) =', sumOfCubes([1, 2, 3]));
})