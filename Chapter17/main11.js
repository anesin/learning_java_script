$(document).ready(function() {
    'use strict';

    console.log('17.11 마침표와 이스케이프');
    {
        const input = 'Address: 333 Main St., Anywhere, NY, 55532. Phone: 555-555-2525.';  console.log('input:', input);
        const match = input.match(/\d{5}.*/);                                              console.log('match:', match);
    }
    {
        const equation = '(2 + 3.5) * 7';                        console.log('equation:', equation);
        const match = equation.match(/\(\d \+ \d\.\d\) \* \d/);  console.log('match:', match);
    }

    console.log('17.11.1 진정한 와일드카드');
    {
        const cr = '\n';                   console.log('cr:', cr);
        const match = cr.match(/[\s\S]/);  console.log('match:', match);
    }

    console.log('17.12 그룹');
    {
        const text = 'Visit oreilly.com today!';                    console.log('text:', text);
        const match = text.match(/[a-z]+(?:\.com|\/.org|\.edu)/i);  console.log('match:', match);

        const html = '<link rel="stylesheet" href="http://insecure.com/stuff.css">\n' +
                     '<link rel="stylesheet" href="https://insecure.com/securestuff.css">\n' +
                     '<link rel="stylesheet" href="//anything.com/flexible.css">';  console.log('html:', html);
        const matches = html.match(/(?:https?)?\/\/[a-z][a-z0-9-]+[a-z0-9]+/ig);    console.log('matches:', matches);
    }

    console.log('17.13 소극적 일치, 적극적 일치');
    {
        const input = 'Regex pros know the difference between\n' +
                      '<i>greedy</i> and <i>lazy</i> matching.';  console.log('input:', input);
        const output1 = input.replace(/<i>(.*)<\/i>/ig,  '<strong>$1</strong>');    console.log('output1:', output1);
        const output2 = input.replace(/<i>(.*?)<\/i>/ig, '<strong>$1</strong>');    console.log('output2:', output2);
    }

    console.log('17.14 역참조');
    {
        const promo = 'Opening for XAAX is the dynamic GOOG! At the box office now!';  console.log('promo:', promo);
        const bands = promo.match(/([A-Z])([A-Z])\2\1/g);                              console.log('bands:', bands);

        const html = `<img alt='A "simple" example.'>` +
                     `<img alt="Dont't abuse it!">`;          console.log('html:', html);
        const matches = html.match(/<img alt=(['"]).*?\1/g);  console.log('matches:', matches);
    }
})