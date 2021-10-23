$(document).ready(function() {
    'use strict';

    {
        console.log('const arr = Array(10).map(function(x) { return 5 });');
        const arr = Array(10).map(function(x) { return 5 });
        console.log(arr);
    }

    {
        console.log('const arr = [1, 2, 3, 4, 5];');
        const arr = [1, 2, 3, 4, 5];
        console.log(arr);
        delete arr[2];
        console.log(arr);
        console.log(arr.map(x => 0));
    }

    {
        console.log("const arr = [1, null, 'hello', 'world', true, undefined];");
        const arr = [1, null, 'hello', 'world', true, undefined];
        delete arr[3];
        console.log(arr);
        console.log(arr.join());
        console.log(arr.join(''));
        console.log(arr.join(' -- '));
    }

    {
        const attributes = ["Nimble", "Perceptive", "Generous"];
        console.log('const attributes = ["Nimble", "Perceptive", "Generous"];');
        const html = '<ul><li>' + attributes.join('</li><li>') + '</li></ul>';
        console.log(html);
    }
})