$(document).ready(function () {
    'use strict';

    {
        let n = 0;
        while (n < 100) {  // true
            n += 0.1;
            if (n === 0.3)
                break;
        }
        console.log(`Stopped at ${n}`);
    }

    {
        let n = 0;
        while (true) {
            n += 0.1;
            if (Math.abs(n - 0.3) < Number.EPSILON)
                break;
        }
        console.log(`Stopped at ${n}, EPSILON = ${Number.EPSILON}`);
    }

    {
        console.log('3 + 5 + "8" = ', 3 + 5 + "8");
        console.log('"3" + 5 + 8 = ', "3" + 5 + 8);
    }

    function f(v) {
        if (v)
            console.log(`${v} is true.`);
        else
            console.log(`${v} is false.`);
    };
    {
        f(undefined);
        f(null);
        f(false);
        f(0);
        f(NaN);
        f('');

        f([]);
        f(' ');
        f('false');
        console.log('[] == false :', [] == false);
    }
});
