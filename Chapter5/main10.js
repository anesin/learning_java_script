$(document).ready(function() {
    'use strict';

    {
        const obj = {b: 2, c: 3, d: 4};
        const {a, b, c} = obj;
        console.log('a =', a);
        console.log('b =', b);
        console.log('c =', c);
        // console.log('d =', d);
    }

    {
        const obj = {b: 2, c: 3, d: 4};
        let a, b, c;
        // {a, b, c} = obj;
        ({a, b, c} = obj);
        console.log('a =', a);
        console.log('b =', b);
        console.log('c =', c);
    }

    {
        const arr = [1, 2, 3];
        let [x, y] = arr;
        console.log('x =', x);
        console.log('y =', y);
        // console.log('z =', z);
    }

    {
        const arr = [1, 2];
        let [x, y, z] = arr;
        console.log('x =', x);
        console.log('y =', y);
        console.log('z =', z);
    }

    {
        const arr = [1, 2, 3, 4, 5];
        let [x, y, ...rest] = arr;
        console.log('x =', x);
        console.log('y =', y);
        console.log('rest =', rest);
    }

    {
        let a = 5, b = 10; console.log('a, b =', a, b);
        [a, b] = [b, a];   console.log('a, b =', a, b);
    }

    {
        const roomTempC = 21.5;
        let currentTempC = 19.5;
        const message = `The current temperature is ` +
                        `${currentTempC - roomTempC}\u00b0C ` +
                        `different than room temperature.`;
        console.log(message);
        const fahrenheit = `The current temperature is ` +
                           `${currentTempC*9/5 + 32}\u00b0F.`;
        console.log(fahrenheit);
    }
});
