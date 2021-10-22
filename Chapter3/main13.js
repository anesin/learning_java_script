$(document).ready(function() {
    'use restrict';

    const s = "hello";
    console.log('s = ', s);
    console.log('s.toUpperCase() = ', s.toUpperCase());
    console.log('s = ', s);

    s.rating = 3;
    console.log('s.rating = ', s.rating);
    console.log('s = ', s);

    const a1 = [1, 2, 3, 4];
    const a2 = [1, 'two', 3, null];
    const a3 = [
        'What the hammer?',
        'In what furnace ...?',
        'What the anvil?',
    ];
    const a4 = [
        { name: 'Ruby', hardness: 9 },
        { name: 'Topaz', hardness: 8 },
    ];
    const a5 = [
        [1, 3, 5],
        [2, 4, 6],
    ];
    console.log('a1 = ', a1);
    console.log('a2 = ', a2);
    console.log('a3 = ', a3);
    console.log('a4 = ', a4);
    console.log('a5 = ', a5);

    const arr = ['a', 'b', 'c'];
    console.log('arr.length = ', arr.length);
    console.log('arr[0] = ', arr[0]);
    console.log('arr[arr.length - 1] = ', arr[arr.length - 1]);
    console.log('arr[-1] = ', arr[-1]);

    const arr2 = [1, 2, 'c', 4, 5];
    console.log('arr2 = ', arr2);
    arr2[2] = 3;
    console.log('arr2 = ', arr2);
});
