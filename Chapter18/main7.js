$(document).ready(function() {
    'use strict';

    console.log('18.7 새 DOM 요소 만들기');
    {
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        p1.textContent = 'I was created dynamically!';
        p2.textContent = 'I was also created dynamically!';

        const parent = document.getElementById('content');
        const firstChild = parent.childNodes[0];

        parent.insertBefore(p1, firstChild);
        parent.appendChild(p2);
    }
})