$(document).ready(function() {
    'use strict';

    const bruce = {name: 'Bruce'};
    const madeline = {name: 'Madeline'};
    function greet() {
        return `Hello, I'm ${this.name}!`;
    }
    // console.log(greet());
    console.log(greet.call(bruce));
    console.log(greet.call(madeline));

    function update(birthYear, occupation) {
        this.birthYear = birthYear;
        this.occupation = occupation;
    }
    update.call(bruce, 1945, 'singer');      console.log(bruce);
    update.call(madeline, 1942, 'actress');  console.log(madeline);

    update.apply(bruce, [1955, 'actor']);      console.log(bruce);
    update.apply(madeline, [1918, 'writer']);  console.log(madeline);

    const arr = [2, 3, -5, 15, 7];
    console.log(arr);
    console.log(Math.min.apply(null, arr));
    console.log(Math.max.apply(null, arr));

    const newBruce = [1940, 'martial artist'];
    update.call(bruce, ...newBruce);
    console.log(bruce);
    console.log(Math.min(...arr));
    console.log(Math.max(...arr));

    const updateBruce = update.bind(bruce);
    updateBruce(1904, 'actor');
    console.log(bruce);
    updateBruce.call(madeline, 1274, 'king');
    console.log(bruce);
    console.log(madeline);

    const updateBruce1949 = update.bind(bruce, 1949);
    updateBruce1949('singer, songwriter');
    console.log(bruce);
})