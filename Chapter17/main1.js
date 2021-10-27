$(document).ready(function() {
    'use strict';

    console.log('17.1 부분 문자열 검색과 대체');
    {
        const input = "AS I was going to Saint Ives";  console.log(input);
        console.log('input.startsWith("AS") =', input.startsWith("AS"));
        console.log('input.endsWith("Ives") =', input.endsWith("Ives"));
        console.log('input.startsWith("going", 9) =', input.startsWith("going", 9));
        console.log('input.endsWith("going", 14) =',  input.endsWith("going", 14));
        console.log('input.includes("going") =',     input.includes("going"));
        console.log('input.includes("going", 10) =', input.includes("going", 10));
        console.log('input.indexOf("going") =',     input.indexOf("going"));
        console.log('input.indexOf("going", 10) =', input.indexOf("going", 10));
        console.log('input.indexOf("nope") =',      input.indexOf("nope"));

        console.log('input.toLowerCase().startsWith("as") =', input.toLowerCase().startsWith("as"));

        const output = input.replace('going', 'walking');
        console.log('input:', input);
        console.log('output:', output);
    }

    console.log('17.2 정규식 만들기');
    {
        const re1 = /going/;              console.log('re1: ', re1);
        const re2 = new RegExp('going');  console.log('re2: ', re2);
    }

    console.log('17.3 정규식 검색');
    {
        const input = "AS I was going to Saint Ives";  console.log('input:', input);
        const re = /\w{3,}/ig;  console.log('re:', re);
        // i: case insensitive, g: global

        console.log('input.match(re):', input.match(re));
        console.log('input.search(re):', input.search(re));

        console.log('re.exec(input):', re.exec(input));
        console.log('re.exec(input):', re.exec(input));
        console.log('re.exec(input):', re.exec(input));
        console.log('re.exec(input):', re.exec(input));
        console.log('re.exec(input):', re.exec(input));
        console.log('re.test(input):', re.test(input));

        console.log('input.match(/\w{3,}/ig):', input.match(/\w{3,}/ig));
        console.log('input.search(/\w{3,}/ig):', input.search(/\w{3,}/ig));

        console.log('/\w{3,}/ig.exec(input):', /\w{3,}/ig.exec(input));
        console.log('/\w{3,}/ig.exec(input):', /\w{3,}/ig.exec(input));
        console.log('/\w{3,}/ig.test(input):', /\w{3,}/ig.test(input));
    }

    console.log('17.4 정규식을 사용한 문자열 교체');
    {
        const input = "AS I was going to Saint Ives";       console.log('input:', input);
        const output = input.replace(/\w{4,}/ig, '****');  console.log('output:', output);
    }
})