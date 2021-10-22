$(document).ready(function() {
    'use strict';

    const obj = {};
    obj.color = "yellow";
    obj["not an identifier"] = 3;
    console.log("obj = ", obj);
    console.log("obj.color = ", obj.color);
    console.log('obj["not an identifier"] = ', obj["not an identifier"]);
    console.log('obj["color"] = ', obj["color"]);

    const SIZE = Symbol();
    console.log("SIZE = ", SIZE);
    obj[SIZE] = 8;
    console.log('obj[SIZE] = ', obj[SIZE]);
    console.log('obj.SIZE = ', obj.SIZE);
    console.log("obj = ", obj);

    const sam1 = {
        name: 'Sam',
        age: 4
    };
    console.log('sam1 = ', sam1);

    const sam2 = { name: 'Sam', age: 4 };
    console.log('sam2 = ', sam2);

    const sam3 = {
        name: 'Sam',
        classification: {
            kingdom: 'Anamalia',
            phylum: 'Chordata',
            family: 'Felidae',
        },
    };
    console.log('sam3 = ', sam3);
    console.log('sam3.classification.family = ', sam3.classification.family);
    console.log('sam3["classification"].family = ', sam3["classification"].family);
    console.log('sam3.classification["family"] = ', sam3.classification["family"]);
    console.log('sam3["classification"]["family"] = ', sam3["classification"]["family"]);

    sam3.speak = function() { return "Meow!"; };
    console.log('sam3.speak() = ', sam3.speak());

    console.log('sam3 = ', sam3);
    delete sam3.classification;
    console.log('sam3 = ', sam3);
    delete sam3.speak;
    console.log('sam3 = ', sam3);
});
