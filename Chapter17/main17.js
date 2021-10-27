$(document).ready(function() {
    'use strict';

    console.log('17.17 위치 지정');
    {
        const input = 'It was the best of times, it was the worst of times';  console.log(input);
        const beginning = input.match(/^\w+/g);    console.log('beginning:', beginning);
        const end = input.match(/\w+$/g);          console.log('end:', end);
        const everything = input.match(/^.*$/g);   console.log('everything:', everything);
        const nomatch1 = input.match(/^best/ig);   console.log('nomatch1:', nomatch1);
        const nomatch2 = input.match(/worst$/ig);  console.log('nomatch2:', nomatch2);
    }
    {
        const input = 'One line\nTwo lines\nThree lines\nFour';  console.log(input);
        const beginning = input.match(/^\w+/mg);    console.log('beginning:', beginning);
        const end = input.match(/\w+$/mg);          console.log('end:', end);
    }

    console.log('17.18 단어 경계 일치');
    {
        const inputs = [
            'john@doe.com',
            'john@doe.com is my email',
            'my email is john@doe.com',
            'use john@doe.com, my email',
            'my email:john@doe.com.',
        ];
        console.log(inputs);
        const emailMatcher = /\b[a-z][a-z0-9._-]*@[a-z0-9_-]+\.[a-z]+(?:\.[a-z]+)?\b/ig;
        console.log(inputs.map(s => s.replace(emailMatcher, '<a href="mailto:$&">$&</a>')));
    }
})