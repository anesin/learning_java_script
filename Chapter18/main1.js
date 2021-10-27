$(document).ready(function() {
    'use strict';

    console.log('18.1 ES5와 ES6');

    console.log('18.2 문서 객체 모델');
    {
        function printDOM(node, prefix) {
            console.log(prefix + node.nodeName);
            for (let i = 0; i < node.childNodes.length; ++i)
                printDOM(node.childNodes[i], prefix + '\t');
        }
        printDOM(document, '');
    }

    console.log('18.3 용어 사용');
})