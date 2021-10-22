$(document).ready(function() {
    'use strict';

    {
        {
            const x = 'blue';
            console.log(x);
        }
        console.log(typeof x);
        {
            const x = 3;
            console.log(x);
        }
        console.log(typeof x);
    }

    {
        {
            let x = 'blue';
            console.log(x);
            {
                let x = 3;
                console.log(x);
            }
            console.log(x);
        }
        console.log(typeof x);
    }

    {
        let x = {color: 'blue'};
        let y = x;
        let z = 3;
        {
            let x = 5;
            console.log(x);
            console.log(y.color);
            y.color = 'red';
            console.log(z);
        }
        console.log(x.color);
        console.log(y.color);
        console.log(z);
    }
})