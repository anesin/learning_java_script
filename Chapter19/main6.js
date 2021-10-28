$(function() {
    'use strict';

    console.log('19.6 제이쿼리 취소');
    {
        const para2 = $('p').get(1);
        console.log('para2:', para2);

        const paras = $('p').get();
        console.log('paras:', paras);
    }
}
});