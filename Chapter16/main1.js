$(document).ready(function() {
    'use strict';

    console.log('16.1 숫자 형식');
    {
        const x = 19.51;  console.log(x);
        console.log(x.toFixed(3), x);
        console.log(x.toFixed(2), x);
        console.log(x.toFixed(1), x);
        console.log(x.toFixed(0), x);
    }
    {
        const x = 3800.5;  console.log(x);
        console.log(x.toExponential(4), x);
        console.log(x.toExponential(3), x);
        console.log(x.toExponential(2), x);
        console.log(x.toExponential(1), x);
        console.log(x.toExponential(0), x);
    }
    {
        let x = 1000;  console.log(x);
        console.log(x.toPrecision(5), x);
        console.log(x.toPrecision(4), x);
        console.log(x.toPrecision(3), x);
        console.log(x.toPrecision(2), x);
        console.log(x.toPrecision(1), x);
        x = 15.335;  console.log(x);
        console.log(x.toPrecision(6), x);
        console.log(x.toPrecision(5), x);
        console.log(x.toPrecision(4), x);
        console.log(x.toPrecision(3), x);
        console.log(x.toPrecision(2), x);
        console.log(x.toPrecision(1), x);
    }
    {
        const x = 12;  console.log(x);
        console.log(x.toString());
        console.log(x.toString(10));
        console.log(x.toString(16));
        console.log(x.toString(8));
        console.log(x.toString(2));
    }
})