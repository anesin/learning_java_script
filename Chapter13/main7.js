$(document).ready(function() {
    'use strict';

    console.log('13.7 재귀');

    function findNeedle(haystack) {
        if (haystack.length === 0)
            return 'no haystack here!';
        if (haystack.shift() === 'needle')
            return 'found it!';
        return findNeedle(haystack);
    }

    console.log(findNeedle(['hay', 'hay', 'hay', 'hay', 'needle', 'hay', 'hay']));

    function fact(n) {
        if (n === 1)
            return 1;
        return n * fact(n - 1);
    }
    console.log('fact(10) =', fact(10));
})