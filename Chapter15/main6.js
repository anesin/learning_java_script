$(document).ready(function() {
    'use strict';

    // const moment = require('moment-timezone');

    console.log('15.6 날짜 데이터 전송하기');
    {
        const before = {d: new Date()};       console.log(before);
        console.log('before.d instanceof Date = ' + (before.d instanceof Date));
        const json = JSON.stringify(before);  console.log(json);
        const after = JSON.parse(json);       console.log(after);
        console.log('after.d instanceof Date = ' + (after.d instanceof Date));
        console.log('typeof after.d = ' + (typeof after.d));

        after.d = new Date(after.d);          console.log(after);
        console.log('after.d instanceof Date = ' + (after.d instanceof Date));
        console.log('typeof after.d = ' + (typeof after.d));
    }
    {
        const before = {d: new Date().valueOf()};       console.log(before);
        console.log('typeof before.d = ' + (typeof before.d));
        const json = JSON.stringify(before);            console.log(json);
        const after = JSON.parse(json);                 console.log(after);
        console.log('typeof after.d = ' + (typeof after.d));
        const d = new Date(after.d);                    console.log(d);
    }

    console.log('15.7 날짜 형식');
    {
        const d = new Date(Date.UTC(1930, 4, 10));
        console.log(d);
        console.log(d.toLocaleDateString());
        // console.log(d.toLocaleFormat());
        console.log(d.toLocaleTimeString());
        console.log(d.toTimeString());
        console.log(d.toUTCString());

        moment(d).format('YYYY-MM-DD');
        moment(d).format('YYYY-MM-DD HH:mm');
        moment(d).format('YYYY-MM-DD HH:mm Z');
        moment(d).format('YYYY-MM-DD HH:mm [UTC]Z');
        moment(d).format('YYYY년 M월 D일 HH:mm');

        moment(d).format('dddd, MMMM [the] Do, YYYY');

        moment(d).format('h:mm a');
    }
})