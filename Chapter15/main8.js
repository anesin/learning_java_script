$(document).ready(function() {
    'use strict';

    // const moment = require('moment-timezone');

    console.log('15.8 날짜 구성 요소');
    {
        const d = new Date(Date.UTC(1815, 9, 10));  console.log(d);
        console.log(d.getFullYear());
        console.log(d.getMonth());
        console.log(d.getDate());
        console.log(d.getDay());
        console.log(d.getHours());
        console.log(d.getMinutes());
        console.log(d.getSeconds());
        console.log(d.getMilliseconds());

        console.log(d.getUTCFullYear());
        console.log(d.getUTCMonth());
        console.log(d.getUTCDate());
    }

    console.log('15.9 날짜 비교');
    {
        const d1 = new Date(1996, 2, 1);   console.log(d1);
        const d2 = new Date(2009, 4, 27);  console.log(d2);
        console.log('d1 > d2:', d1 > d2);
        console.log('d1 < d2:', d1 < d2);
    }
})