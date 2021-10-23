$(document).ready(function() {
    'use strict';

    {
        const arr = ['b', 'c', 'd'];
        arr.push('e');     console.log('arr =', arr);
        arr.pop();         console.log('arr =', arr);
        arr.unshift('a');  console.log('arr =', arr);
        arr.shift();       console.log('arr =', arr);
    }

    {
        const arr = [1, 2, 3];  console.log('arr =', arr);
        console.log(arr.concat(4, 5, 6),     'arr =', arr);
        console.log(arr.concat([4, 5, 6]),   'arr =', arr);
        console.log(arr.concat([4, 5], 6),   'arr =', arr);
        console.log(arr.concat([4, [5, 6]]), 'arr =', arr);
    }

    {
        const arr = [1, 2, 3, 4, 5];  console.log('arr =', arr);
        console.log(arr.slice(3), 'arr =', arr);
        console.log(arr.slice(2, 4), 'arr =', arr);
        console.log(arr.slice(-2), 'arr =', arr);
        console.log(arr.slice(1, -2), 'arr =', arr);
        console.log(arr.slice(-2, -1), 'arr =', arr);
    }

    {
        const arr = [1, 5, 7];  console.log('arr =', arr);
        console.log(arr.splice(1, 0, 2, 3, 4), 'arr =', arr);
        console.log(arr.splice(5, 0, 6), 'arr =', arr);
        console.log(arr.splice(1, 2), 'arr =', arr);
        console.log(arr.splice(2, 1, 'a', 'b'), 'arr =', arr);
    }

    {
        const arr = [1, 2, 3, 4];  console.log('arr =', arr);
        console.log(arr.copyWithin(1, 2), 'arr =', arr);
        console.log(arr.copyWithin(2, 0, 2), 'arr =', arr);
        console.log(arr.copyWithin(0, -3, -1), 'arr =', arr);
    }

    {
        const arr = new Array(5).fill(1);  console.log('arr =', arr);
        console.log(arr.fill('a'), 'arr =', arr);
        console.log(arr.fill('b', 1), 'arr =', arr);
        console.log(arr.fill('c', 2, 4), 'arr =', arr);
        console.log(arr.fill(5.5, -4), 'arr =', arr);
        console.log(arr.fill(0, -3, -1), 'arr =', arr);
    }

    {
        const arr = [1, 2, 3, 4, 5];  console.log('arr =', arr);
        console.log(arr.reverse(), 'arr =', arr);
    }

    {
        const arr = [5, 4, 3, 2, 1];  console.log('arr =', arr);
        console.log(arr.sort(), 'arr =', arr);
    }

    {
        const arr = [
            {name: 'Suzanne'}, {name: 'Jim'},
            {name: 'Trevor'}, {name: 'Amanda'}
        ];
        console.log('arr =', arr);
        console.log(arr.sort(), 'arr =', arr);
        // 아래는 동작하지 않음.
        // 부울값이 아니라 정수를 리턴하는 함수를 넘겨야 한다.
        console.log(arr.sort((a, b) => a.name > b.name), 'arr =', arr);
        console.log(arr.sort((a, b) => a.name[1] < b.name[1]), 'arr =', arr);
    }
})