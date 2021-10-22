$(document).ready(function() {
    'use strict';

    {
        let globalFunc;
        {
            let blockVar = 'a';
            globalFunc = function() {
                console.log(blockVar);
            }
        }
        globalFunc();
    
        let f;
        {
            let o = {note: 'Safe'};
            f = function() { return o; }
        }
        let oRef = f();
        oRef.note = 'Not so safe after all!';
        console.log(oRef);
        console.log(f());
    }

    {
        (function() {
            // IIFE body
        })();
    
        const message = (function() {
            const secret = "I'm a secret!";
            return `The secret is ${secret.length} characters long.`;
        })();
        console.log(message);

        const f = (function() {
            let count = 0;
            return function() {
                return `I have been called ${++count} time(s).`;
            }
        })();
        console.log(f());
        console.log(f());
        console.log(f());

        const f2 = (function() {
            let count = 0;
            return `I have been called ${++count} time(s).`;
        })();
        console.log(f2);
        console.log(f2);
        console.log(f2);
    }
})