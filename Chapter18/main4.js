$(document).ready(function() {
    'use strict';

    console.log('18.4 get 메서드');
    {
        console.log(document.getElementById('content'));

        const callouts = document.getElementsByClassName('callout');
        console.log('callouts:', callouts);

        const paragraphs = document.getElementsByTagName('p');
        console.log('paragraphs:', paragraphs);
    }

    console.log('18.5 DOM 요소 쿼리');

    console.log('18.6 DOM 요소 조작');
    {
        const para1 = document.getElementsByTagName('p')[0];
        console.log('para1:', para1);
        console.log('para1.textContent:', para1.textContent);
        console.log('para1.innerHTML:', para1.innerHTML);
        para1.textContent = 'Modified HTML file';
        para1.innerHTML = 'Modified HTML file';
    }
})