$(document).ready(function() {
    'use strict';

    const now = new Date()
    console.log('now = ', now);

    const halloween = new Date(2016, 9, 31);
    console.log('halloween = ', halloween);
    const halloweenParty = new Date(2016, 9, 31, 19, 0);
    console.log('halloweenParty = ', halloweenParty);
    console.log('halloweenParty.getFullYear() = ',     halloweenParty.getFullYear());
    console.log('halloweenParty.getMonth() = ',        halloweenParty.getMonth());
    console.log('halloweenParty.getDate() = ',         halloweenParty.getDate());
    console.log('halloweenParty.getDay() = ',          halloweenParty.getDay());
    console.log('halloweenParty.getHours() = ',        halloweenParty.getHours());
    console.log('halloweenParty.getMinutes() = ',      halloweenParty.getMinutes());
    console.log('halloweenParty.getSeconds() = ',      halloweenParty.getSeconds());
    console.log('halloweenParty.getMilliseconds() = ', halloweenParty.getMilliseconds());

    const email = /\b[a-z0-9._-]+@[a-z_-]+(?:\.[a-z]+)+\b/;
    console.log('email = ', email);
    const phone = /(:?\+1)?(:?\(\d{3}\)\s?|\d{3}[\s-]?)\d{3}[\s-]?\d{4}/;
    console.log('phone = ', phone);

    const numStr = '33.3';
    console.log('numStr = ', numStr);
    const num = Number(numStr);
    console.log('num = ', num);

    const a = parseInt('16 volts', 10);  console.log('a = ', a);
    const b = parseInt('3a', 16);        console.log('b = ', b);
    const c = parseInt('15.5 kph');      console.log('c = ', c);

    const d = new Date();
    const ts = d.valueOf();
    console.log('d = ', d);

    const bb = true;
    const n = bb? 1: 0;
    console.log('bb = ', bb);
    console.log('n = ', n);

    const nn = 33.5;
    console.log('nn = ', nn);
    const s = nn.toString();
    console.log('s = ', s);

    const arr = [1, true, 'hello'];
    console.log('arr = ', arr);
    console.log('arr.toString() = ', arr.toString());

    const nb = 0;            console.log('nb = ', nb);
    const b1 = !!nb;         console.log('b1 = ', b1);
    const b2 = Boolean(nb);  console.log('b2 = ', b2);
});