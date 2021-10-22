$(document).ready(function() {
    'use strict';

    function d2b(d) {
        return (d >>> 0).toString(2);
    }
    {
        let n = 22;
        console.log(`${n} =`, d2b(n));
        console.log('n >> 1  =', d2b(n >> 1));
        console.log('n >>> 1 =', d2b(n >>> 1));
        n = ~n;
        console.log('~n      =', d2b(n));
        ++n;
        console.log('n++     =', d2b(n));
        console.log('n >> 1  =', d2b(n >> 1));
        console.log('n >>> 1 =', d2b(n >>> 1));
    }

    {
        const FLAG_EXECUTE = 1;  console.log('FLAG_EXECUTE =', d2b(FLAG_EXECUTE));
        const FLAG_WRITE   = 2;  console.log('FLAG_WRITE   =', d2b(FLAG_WRITE));
        const FLAG_READ    = 4;  console.log('FLAG_READ    =', d2b(FLAG_READ));

        let p = FLAG_READ | FLAG_WRITE;     console.log('p =', d2b(p));
        let hasWrite = p & FLAG_WRITE;      console.log('hasWrite =', d2b(hasWrite));
        let hasExecute = p & FLAG_EXECUTE;  console.log('hasExecute =', d2b(hasExecute));
        p = p ^ FLAG_WRITE;  console.log('p ^ FLAG_WRITE =', d2b(p));
        p = p ^ FLAG_WRITE;  console.log('p ^ FLAG_WRITE =', d2b(p));

        const hasReadOrExecute = p & (FLAG_READ | FLAG_EXECUTE);
        const hasReadAndExecute = p & (FLAG_READ | FLAG_EXECUTE) === FLAG_READ | FLAG_EXECUTE;
        console.log('hasReadOrExecute  =', d2b(hasReadOrExecute));
        console.log('hasReadAndExecute =', d2b(hasReadAndExecute));
    }

    {
        console.log('typeof undefined :    ', typeof undefined);
        console.log('typeof null :         ', typeof null);
        console.log('typeof {} :           ', typeof {});
        console.log('typeof true :         ', typeof true);
        console.log('typeof 1 :            ', typeof 1);
        console.log('typeof "" :           ', typeof "");
        console.log('typeof Symbol() :     ', typeof Symbol());
        console.log('typeof function() {} :', typeof function() {});
    }

    {
        let v, v0;
        v = v0 = 9.8;

        const nums = [3, 5, 15, 7, 5];
        let n, i = 0;
        while ((n = nums[i]) < 10 && i++ < nums.length)
            console.log(`Number less than 10: ${n}.`);
        console.log(`Number greater than 10 found: ${n}.`);
        console.log(`${nums.length - i - 1} numbers remain.`);
    }
});
