$(document).ready(function() {
    'use strict';

    {
        function f(x) {
            console.log(`f 내부: x=${x}`);
            x = 5;
            console.log(`f 내부: x=${x} (할당 후)`);
        }
        let x = 3;
        console.log(`f를 호출하기 전: x=${x}`);
        f(x);
        console.log(`f를 호출한 다음: x=${x}`);
    }

    {
        function f2(o) {
            o.message = `f 안에서 수정함 (이전 값: '${o.message}')`;
        }
        let o = {message: '초기 값'};
        console.log(`f를 호출하기 전: o.message="${o.message}"`);
        f2(o);
        console.log(`f를 호출한 다음: o.message="${o.message}"`);
    }

    {
        function f3(o3) {
            o3.message = 'f에서 수정함';
            o3 = {message: '새로운 객체!'};
            console.log(`f 내부: o3.message="${o3.message}" (할당 후)`);
        }
        let o3 = {message: '초기값'};
        console.log(`f를 호출하기 전: o3.message="${o3.message}"`);
        f3(o3);
        console.log(`f를 호출한 다음: o3.message="${o3.message}"`);
    }

    {
        function f(x) {
            return `in f: x=${x}`;
        }
        console.log('f() =', f());
    }

    {
        function getSentence({subject, verb, object}) {
            return `${subject} ${verb} ${object}`;
        }
        const o = {subject: 'I', verb: 'love', object: 'JavaScript'};
        console.log(`getSentence(o) = "${getSentence(o)}"`);
    }

    {
        function getSentence([subject, verb, object]) {
            return `${subject} ${verb} ${object}`;
        }
        const arr = ['I', 'love', 'JavaScript'];
        console.log(`getSentence(arr) = "${getSentence(arr)}"`);
    }

    {
        function addPrefix(prefix, ...words) {
            const prefixedWords = [];
            for (let i = 0; i < words.length; ++i)
                prefixedWords[i] = prefix + words[i];
            return prefixedWords;
        }
        console.log(`addPrefix('con', 'verse', 'vex') = "${addPrefix('con', 'verse', 'vex')}"`);
    }

    {
        function f(a, b='default', c=3) {
            return `${a} - ${b} - ${c}`;
        }
        console.log('f(5, 6, 7) =', f(5, 6, 7));
        console.log('f(5, 6) =',    f(5, 6));
        console.log('f(5) =',       f(5));
        console.log('f() =',        f());
    }
});