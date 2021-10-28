// $(document).ready(function() {
$(function() {
    'use strict';

    console.log('19.1 맥가이버 나이프, 달러 기호');

    console.log('19.2 제이쿼리 불러오기');

    console.log('19.3 DOM 기다리기');

    console.log('19.4 제이쿼리로 감싼 DOM 요소');
    {
        const $paras = $('p');
        console.log($paras);
        console.log($paras.length);
        console.log(typeof $paras);
        console.log($paras instanceof $);
        console.log($paras instanceof jQuery);

        const $newPara = $('<p>Newly created paragraph...</p>');
        console.log($newPara);
    }

    console.log('19.5 요소 조작');
    {
        $('p').text('ALL PARAGRAPHS REPLACED');
        $('p').html('<i>ALL</i> PARAGRAPHS REPLACED');
        $('p').eq(2).html('<i>THIRD</i> PARAGRAPHS REPLACED');
        // $('p').remove();

        // $('p').append('<sup>*</sup>');
        // $('p').after('<hr>').before('<hr>');

        // $('<sup>*</sup>').appendTo('p');
        // $('<hr>').insertBefore('p');
        // $('<hr>').insertAfter('p');
        // $('p:odd').css('color', 'red');

        // $('p').after('<hr>')
        //       .append('<sup>*</sup>')
        //       .filter(':odd')
        //       .css('color', 'red');

        $('p').after('<hr>')
              .not('.highlight')
              .css('margin-left', '20px');
    }
});