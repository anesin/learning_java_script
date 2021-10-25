$(document).ready(function() {
    'use strict';

    console.log('15.1 날짜, 타임존, 타임스탬프, 유닉스 시간');
    {
        const d = new Date();
        console.log(d);
        console.log(d.valueOf());
    }

    console.log('15.2 Date 객체 만들기');
    {
        console.log(new Date());

        console.log(new Date(2015, 0));
        console.log(new Date(2015, 1));
        console.log(new Date(2015, 1, 14));
        console.log(new Date(2015, 1, 14, 13));
        console.log(new Date(2015, 1, 14, 13, 30));
        console.log(new Date(2015, 1, 14, 13, 30, 5));
        console.log(new Date(2015, 1, 14, 13, 30, 5, 500));

        console.log(new Date(0));
        console.log(new Date(1000));
        console.log(new Date(1463443200000));

        console.log(new Date(-365 * 24 * 60 * 60 * 1000));

        console.log(new Date('June 14, 1903'));
        console.log(new Date('June 14, 1903 GMT-0000'));
    }

    console.log('15.3 Moment.js');
    // const moment = require('moment-timezone');

    console.log('15.4 현실적인 자바스크립트 날짜 접근법');

    console.log('15.5 날짜 데이터 만들기');
    {
        const d = new Date(Date.UTC(2016, 4, 27));  console.log(d);
    }
    {
        const d = moment.tz([2016, 3, 27, 9, 19], 'America/Los_Angeles').toDate();
        console.log(d);
        const s = moment.tz([2016, 3, 27, 9, 19], 'Asia/Seoul').toDate();
        console.log(s);
    }
})