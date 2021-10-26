$(document).ready(function() {
    'use strict';

    console.log('16.2 상수');
    {
        console.log(Math.E);
        console.log(Math.PI);

        console.log(Math.LN2);
        console.log(Math.LN10);
        console.log(Math.LOG2E);
        console.log(Math.LOG10E);

        console.log(Math.SQRT1_2);
        console.log(Math.SQRT2);
    }

    console.log('16.3 대수 함수');
    {
        console.log('Math.pow(2, 3) = '     + Math.pow(2, 3));
        console.log('Math.pow(1.7, 2.3) = ' + Math.pow(1.7, 2.3));
        console.log('Math.sqrt(16) = '   + Math.sqrt(16));
        console.log('Math.sqrt(15.5) = ' + Math.sqrt(15.5));
        console.log('Math.cbrt(27) = ' + Math.cbrt(27));
        console.log('Math.cbrt(22) = ' + Math.cbrt(22));
        console.log('Math.exp(1) = '   + Math.exp(1));
        console.log('Math.exp(5.5) = ' + Math.exp(5.5));
        console.log('Math.expm1(1) = '   + Math.expm1(1));
        console.log('Math.expm1(5.5) = ' + Math.expm1(5.5));
        console.log('Math.hypot(3, 4) = '    + Math.hypot(3, 4));
        console.log('Math.hypot(2, 3, 4) = ' + Math.hypot(2, 3, 4));

        console.log('Math.log(Math.E) = ' + Math.log(Math.E));
        console.log('Math.log(17.5) = '   + Math.log(17.5));
        console.log('Math.log10(10) = '   + Math.log10(10));
        console.log('Math.log10(16.7) = ' + Math.log10(16.7));
        console.log('Math.log2(2) = ' + Math.log2(2));
        console.log('Math.log2(5) = ' + Math.log2(5));
        console.log('Math.log1p(Math.E - 1) = ' + Math.log1p(Math.E - 1));
        console.log('Math.log1p(17.5) = '       + Math.log1p(17.5));

        console.log('Math.abs(-5.5) = ' + Math.abs(-5.5));
        console.log('Math.abs( 5.5) = ' + Math.abs( 5.5));
        console.log('Math.sign(-10.5) = ' + Math.sign(-10.5));
        console.log('Math.sign( 6.77) = ' + Math.sign( 6.77));
        console.log('Math.ceil( 2.2) = ' + Math.ceil( 2.2));
        console.log('Math.ceil(-3.8) = ' + Math.ceil(-3.8));
        console.log('Math.floor( 2.8) = ' + Math.floor( 2.8));
        console.log('Math.floor(-3.2) = ' + Math.floor(-3.2));
        console.log('Math.trunc( 7.7) = ' + Math.trunc( 7.7));
        console.log('Math.trunc(-5.8) = ' + Math.trunc(-5.8));
        console.log('Math.round( 7.2) = ' + Math.round( 7.2));
        console.log('Math.round( 7.7) = ' + Math.round( 7.7));
        console.log('Math.round(-7.7) = ' + Math.round(-7.7));
        console.log('Math.round(-7.2) = ' + Math.round(-7.2));
        console.log('Math.min(1, 2) = '          + Math.min(1, 2));
        console.log('Math.min(3, 0.5,  0.66) = ' + Math.min(3, 0.5,  0.66));
        console.log('Math.min(3, 0.5, -0.66) = ' + Math.min(3, 0.5, -0.66));
        console.log('Math.max( 1, 2) = '          + Math.max( 1, 2));
        console.log('Math.max( 3, 0.5,  0.66) = ' + Math.max( 3, 0.5,  0.66));
        console.log('Math.max(-3, 0.5, -0.66) = ' + Math.max(-3, 0.5, -0.66));
    }

    {
        function random0To1() {
            return Math.random();
        }
        console.log('Random [0, 1) = ' + random0To1());

        function randomXToY(x, y) {
            return x + (y - x)*Math.random();
        }
        console.log('Random [X:10, Y:100) = ' + randomXToY(10, 100));

        function randomIntMToN(m, n) {
            return m + Math.floor((n - m)*Math.random());
        }
        console.log('Random Int [X:10, Y:100) = ' + randomIntMToN(10, 100));

        function randomIntMToN2(m, n) {
            return m + Math.floor((n - m + 1)*Math.random());
        }
        console.log('Random Int [X:10, Y:100] = ' + randomIntMToN2(10, 100));
    }
})