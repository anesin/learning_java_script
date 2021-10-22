$(document).ready(function() {
    'use strict';

    function testIn(obj) {
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop) == false) {
                console.log(prop);
                continue;
            }
            console.log(prop + ': ' + obj[prop]);
        }
    };

    function testOf(arr) {
        for (let n of arr)
        console.log(n);
    }

    const player = {name: 'Thomas', rank: 'Midshipman', age: 25};
    testIn(player);

    const arr = [1, 2, 3, 4];
    testOf(arr);

    // testOf(player);
    testIn(arr);
});