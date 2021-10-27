$(document).ready(function() {
    'use strict';

    console.log('17.19 룩어헤드');
    {
        function validPassword0(p) {
            return /[A-Z]/.test(p) &&
                   /[a-z]/.test(p) &&
                   /[0-9]/.test(p) &&
                   !/[^a-zA-Z0-9]/.test(p);
        }
        console.log('validPassword0("aA1"):',  validPassword0("aA1"));
        console.log('validPassword0("$aA1"):', validPassword0("$aA1"));

        function validPassword1(p) {
            return /[A-Z].*[0-9][a-z]/.test(p);
        }
        console.log('validPassword1("aA1"):',  validPassword1("aA1"));
        console.log('validPassword1("$aA1"):', validPassword1("$aA1"));

        function validPassword2(p) {
            return /(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z])(?!.*[^a-zA-Z0-9])/.test(p);
        }
        console.log('validPassword2("aA1"):',  validPassword2("aA1"));
        console.log('validPassword2("$aA1"):', validPassword2("$aA1"));  // ???
    }

    console.log('17.20 동적으로 정규식 만들기');
    {
        const users = ['mary', 'nick', 'arthur', 'sam', 'yvette'];
        const text = 'User @arthur started the backup and 15:15,' +
                     'and @nick and @yvette restored it at 18:35.';
        console.log(users);
        console.log(text);
        const userRegex = new RegExp(`@(?:${users.join('|')})\\b`, 'g');
        console.log(text.match(userRegex));
    }
})