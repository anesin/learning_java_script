$(document).ready(function() {
    'use strict';

    {
        let var1;
        let var2 = undefined;
        console.log(var1);
        console.log(var2);
        // console.log(undefinedVar);
    }

    {
        // console.log(x);
        let x = 3;
    }

    {
        console.log(x);
        var x = 3;
        console.log(x);
    }

    {
        if (x !== 3) {
            console.log(y);
            var y = 5;
            if (y === 5) {
                var x = 3;
            }
            console.log(y);  // ???
        }
        if (x === 3) {
            console.log(y);
        }
    }

    {
        var x = 3;
        if (x === 3) {
            var x = 2;
            console.log(x);
        }
        console.log(x);
    }

    {
        f();
        function f() { console.log('f'); }
    }

    {
        // f();
        // let f= function() { console.log('f'); }
    }

    {
        if (typeof x === 'undefined')
            console.log("x doesn't exist or is undefined");
        else
            console.log(x);
        // let x = 5;
    }

    (function() {
        'use strict';
        // ...
    })();
})