$(document).ready(function() {
    'use strict';

    function xor(x, y) {
        return (x || y) && x !== y;
    }
    {
        console.log('false ^ false:', xor(false, false));
        console.log('false ^  true:', xor(false, true));
        console.log(' true ^ false:', xor(true, false));
        console.log(' true ^  true:', xor(true, true));
    }

    {
        const skipIt = true;
        let x = 0;
        const result = skipIt || x++;
        console.log(`result = ${result}, x = ${x}`);
    }

    {
        const doIt = false;
        let x = 0;
        const result = doIt && x++;
        console.log(`result = ${result}, x = ${x}`);
    }

    function options(suppliedOptions) {
        return suppliedOptions || {name: 'Default'};
    }
    {
        const op1 = options(null);            console.log('op1.name =', op1.name);
        const op2 = options(undefined);       console.log('op2.name =', op2.name);
        const op3 = options({name: 'test'});  console.log('op3.name =', op3.name);
    }

    {
        const doIt = false;
        const result = doIt? "Did it!": "Didn't do it.";
        console.log(`${result}`);
    }

    {
        let x = 0, y = 10, z = (x++, y++);
        console.log(`x, y, z = ${x}, ${y}, ${z}`);
    }
});
