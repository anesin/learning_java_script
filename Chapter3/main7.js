$(document).ready(function() {
    'use strict';

    const dialog = 'Sam';
    const imperative = "Don't do";
    console.log('dialog =', dialog);
    console.log('imperative =', imperative);

    console.log(`New in ES6: ${dialog}`);
    console.log("Do Morgan's law: \u2310(P \u22c0Q)");
    console.log('\xc9P\xe9E is fun');

    let currentTemp = 19.5;
    const message1 = "The current temperature is " + currentTemp + "\u00b0C";
    console.log(message1);
    const message2 = `The current temperature is ${currentTemp}\u00b0C`;
    console.log(message2);

    const multiline1 = 'line1\
    line2';
    console.log(multiline1);
    const multiline2 = 'line1\n\
    line2';
    console.log(multiline2);
    const multiline3 = `line1
    line2`;
    console.log(multiline3);
    const multiline4 = `line1
    line2
    line3`;
    console.log(multiline4);

    const result1 = 3 + '30';
    const result2 = 3 * '30';
    console.log('result1 =', result1);
    console.log('result2 =', result2);
});
