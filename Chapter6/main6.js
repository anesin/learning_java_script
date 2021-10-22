$(document).ready(function() {
    'use strict';

    {
        const f = function() {
            // ...
        }
    }

    {
        let anesin = 10;
        const g = function f(stop) {
            if (0 == --anesin) {
                console.log(`${anesin}`);
                return;
            }
            if (stop)
                console.log(`f stopped ${anesin}`);
            f(true);
        }
        g(false);
    }

    {
        const f11 = function() { return 'hello!'; }
        const f12 = () => 'hello!';
        console.log(`f11() = ${f11()}`);
        console.log(`f12() = ${f12()}`);

        const f21 = function(name) { return `Hello, ${name}!`; }
        const f22 = name => `Hello, ${name}!`;
        console.log(`f21('ANESIN') = ${f21('ANESIN')}`);
        console.log(`f22('ANESIN') = ${f22('ANESIN')}`);

        const f31 = function(a, b) { return a + b; }
        const f32 = (a, b) => a + b;
        console.log(`f31(1, 2) = ${f31(1, 2)}`);
        console.log(`f32(1, 2) = ${f32(1, 2)}`);
    }
});