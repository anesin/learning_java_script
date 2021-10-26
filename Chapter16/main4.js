$(document).ready(function() {
    'use strict';

    console.log('16.4 삼각함수');
    {
        console.log('Math.sin(Math.PI / 2) =', Math.sin(Math.PI / 2));
        console.log('Math.sin(Math.PI / 4) =', Math.sin(Math.PI / 4));
        console.log('Math.cos(Math.PI) =',     Math.cos(Math.PI));
        console.log('Math.cos(Math.PI / 4) =', Math.cos(Math.PI / 4));
        console.log('Math.tan(Math.PI / 4) =', Math.tan(Math.PI / 4));
        console.log('Math.tan(0) =',           Math.tan(0));
        console.log('Math.asin(0) =',            Math.asin(0));
        console.log('Math.asin(Math.SQRT1_2) =', Math.asin(Math.SQRT1_2));
        console.log('Math.acos(0) =',            Math.acos(0));
        console.log('Math.acos(Math.SQRT1_2) =', Math.acos(Math.SQRT1_2));
        console.log('Math.atan(0) =',            Math.atan(0));
        console.log('Math.atan(Math.SQRT1_2) =', Math.atan(Math.SQRT1_2));
        console.log('Math.atan2(0, 1) =', Math.atan2(0, 1));
        console.log('Math.atan2(1, 1) =', Math.atan2(1, 1));
    }
    {
        function deg2rad(d) {
            return d / 180 * Math.PI;
        }
        function rad2deg(r) {
            return r / Math.PI * 180;
        }
        console.log('deg2rad(180) = ',     deg2rad(180));
        console.log('rad2deg(Math.PI) = ', rad2deg(Math.PI));
    }

    console.log('16.5 쌍곡선함수');
    {
        console.log('Math.sinh(0) =', Math.sinh(0));
        console.log('Math.sinh(1) =', Math.sinh(1));
        console.log('Math.cosh(0) =', Math.cosh(0));
        console.log('Math.cosh(1) =', Math.cosh(1));
        console.log('Math.tanh(0) =', Math.tanh(0));
        console.log('Math.tanh(1) =', Math.tanh(1));
        console.log('Math.asinh(0) =', Math.asinh(0));
        console.log('Math.asinh(1) =', Math.asinh(1));
        console.log('Math.acosh(0) =', Math.acosh(0));
        console.log('Math.acosh(1) =', Math.acosh(1));
        console.log('Math.atanh(0) =', Math.atanh(0));
        console.log('Math.atanh(1) =', Math.atanh(1));
    }
})