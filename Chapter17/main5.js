$(document).ready(function() {
    'use strict';

    console.log('17.5 입력 소비');

    console.log('17.6 대체');
    {
        const html = 'HTML with <a href="/one">one link</a>, and some JavaScript.' +
                     '<script src="stuff.js">';                     console.log('html:', html);
        const matches = html.match(/area|a|link|script|source/ig);  console.log('matches:', matches);
    }

    console.log('17.7 HTML 찾기');
    {
        const html = '<br> [!CDATA[[<br>]]';   console.log('html:', html);
        const matches = html.match(/<br>/ig);  console.log('matches:', matches);
    }

    console.log('17.8 문자셋');
    {
        const beer99 = '99 bottles of beer on the wall ' +
                        'take 1 down and pass it around -- ' +
                        '98 bottles of beer on the wall.';      console.log('beer99:', beer99);
        const matches = beer99.match(/0|1|2|3|4|5|6|7|8|9/ig);  console.log('matches:', matches);

        const m1 = beer99.match(/[0123456789]/ig);  console.log('m1:', m1);
        const m2 = beer99.match(/[0-9]/ig);         console.log('m2:', m2);

        const match1 = beer99.match(/[\-0-9a-z.]/ig);  console.log('match1:', match1);
        const match2 = beer99.match(/[^\-0-9a-z.]/);   console.log('match2:', match2);
    }

    console.log('17.9 자주 쓰는 문자셋');
    {
        const stuff = 'height:     9\n' +
                      'medium:     5\n' +
                      'low:        2\n';           console.log(stuff);
        const levels = stuff.match(/:\s*[0-9]/g);  console.log('levels:', levels);

        const messyPhone = '(505) 555-1515';              console.log('messyPhone:', messyPhone);
        const neatPhone = messyPhone.replace(/\D/g, '');  console.log('neatPhone:', neatPhone);

        const field = '   something   ';  console.log('field:', field);
        const valid = /\S/.test(field);   console.log('valid:', valid);
    }

    console.log('17.10 반복');
    {
        const beer99 = '99 bottles of beer on the wall ' +
                        'take 1 down and pass it around -- ' +
                        '98 bottles of beer on the wall.';                console.log('beer99:', beer99);
        const match1 = beer99.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/);  console.log('match1:', match1);
        const match2 = beer99.match(/[0-9]+/);                            console.log('match2:', match2);
    }
})