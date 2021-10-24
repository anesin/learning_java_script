$(document).ready(function() {
    'use strict';

    console.log('13.5 IIFE와 비동기적 코드');
    {
        setTimeout(function() { console.log("hello"); }, 1000);
    }
    {
        var i;
        for (i = 5; 0 <= i; --i) {
            setTimeout(function() {
                console.log(i === 0? "go!": i);
            }, (5 - i)*1000);
        }
    }
    {
        function loopBody(i) {
            setTimeout(function() {
                console.log(i === 0? "go!": i);
            }, (5 - i)*1000);
        }
        var i;
        for (i = 5; 0 <= i; --i)
            loopBody(i);
    }
    {
        var i;
        for (i = 5; 0 <= i; --i) {
            (function(i) {
                setTimeout(function() {
                    console.log(i === 0? "go!": i);
                }, (5 - i)*1000);
            })(i);
        }
    }
    {
        for (let i = 5; 0 <= i; --i) {
            setTimeout(function() {
                console.log(i === 0? "go!": i);
            }, (5 - i)*1000);
        }
    }
})