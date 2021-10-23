$(document).ready(function() {
    'use strict';
    
    {
        console.log('9.1.1 for...in');
        const SYM = Symbol();
        const o = {a: 1, b: 2, c: 3, [SYM]: 4};
        console.log(o);
        for (let prop in o) {
            if (!o.hasOwnProperty(prop))
                continue;
            console.log(`${prop}: ${o[prop]}`);
        }

        console.log('9.1.2 Object.keys');
        Object.keys(o).forEach(prop => console.log(`${prop}: ${o[prop]}`));
    }

    {
        const o = {apple: 1, xochitl: 2, balloon: 3, guitar: 4, xylophone: 5};
        Object.keys(o)
              .filter(prop => prop.match(/^x/))
              .forEach(prop => console.log(`${prop}: ${o[prop]}`));
    }
})