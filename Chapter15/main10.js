$(document).ready(function() {
    'use strict';

    // const moment = require('moment-timezone');

    console.log('15.10 날짜 연산');
    {
        const d1 = new Date(1996, 2, 1);   console.log(d1);
        const d2 = new Date(2009, 4, 27);  console.log(d2);
        const msDiff = d2 - d1;                         console.log(msDiff);
        const daysDiff = msDiff / 1000 / 60 / 60 / 24;  console.log(daysDiff);
    }
    {
        const dates = [];
        const min = new Date(2017, 0, 1).valueOf();          console.log(min);
        const delta = new Date(2020, 0, 1).valueOf() - min;  console.log(delta);
        for (let i = 0; i < 10; ++i) {
            var r = Math.random();
            dates.push(new Date(min + delta*r));
            console.log(`${i} : ${r} | ${dates[i]}`);
        }
        dates.sort((a, b) => b - a);  for (let d of dates) console.log(d);
        dates.sort((a, b) => a - b);  for (let d of dates) console.log(d);
    }
    {
        let m = moment();         console.log(m);
        m.add(3, 'days');         console.log(m);
        m.subtract(2, 'years');   console.log(m);

        m = moment();       console.log(m);
        m.startOf('year');  console.log(m);
        m.endOf('month');   console.log(m);
    }
    {
        let m = moment().add(10, 'hours')
                        .subtract(3, 'dyas')
                        .endOf('month');
        console.log(m);
    }

    console.log('15.11 사용자가 알기 쉬운 상대적 날짜');
    {
        console.log(moment().subtract(10, 'seconds').fromNow());
        console.log(moment().subtract(44, 'seconds').fromNow());
        console.log(moment().subtract(45, 'seconds').fromNow());

        console.log(moment().subtract( 5, 'minutes').fromNow());
        console.log(moment().subtract(44, 'minutes').fromNow());
        console.log(moment().subtract(45, 'minutes').fromNow());

        console.log(moment().subtract( 5, 'hours').fromNow());
        console.log(moment().subtract(21, 'hours').fromNow());
        console.log(moment().subtract(22, 'hours').fromNow());

        console.log(moment().subtract(300, 'days').fromNow());
        console.log(moment().subtract(345, 'days').fromNow());
    }
})