$(document).ready(function() {
    'use strict';

    let count = 10;         console.log('count =', count);
    const blue = 0x000ff;   console.log('blue =', blue);
    const umask = 0o0022;   console.log('umask =', umask);
    const roomTemp = 21.5;  console.log('roomTemp =', roomTemp);
    const c = 3.0e6;        console.log('c =', c);
    const e = -1.6e-19;     console.log('e =', e);
    const inf = Infinity;   console.log('inf =', inf);
    const ninf = -Infinity; console.log('ninf =', ninf);
    const nan = NaN;        console.log('nan =', nan);

    const small = Number.EPSILON;           console.log('small =', small);
    const bigInt = Number.MAX_SAFE_INTEGER; console.log('bigInt =', bigInt);
    const max = Number.MAX_VALUE;           console.log('max =', max);
    const minInt = Number.MIN_SAFE_INTEGER; console.log('minInt =', minInt);
    const min = Number.MIN_VALUE;           console.log('min =', min);
    const nInf = Number.NEGATIVE_INFINITY;  console.log('nInf =', nInf);
    const nan2 = Number.NaN;                console.log('nan2 =', nan2);
    const inf2 = Number.POSITIVE_INFINITY;  console.log('inf2 =', inf2);
});
