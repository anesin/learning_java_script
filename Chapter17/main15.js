$(document).ready(function() {
    'use strict';

    console.log('17.15 그룹 교체');
    {
        let html = '<a class="nope" href="/yep">Yep</a>';         console.log('html:', html);
        html = html.replace(/<a .*?(href=".*?").*?>/, '<a $1>');  console.log('html:', html);
    }
    {
        let html = '<a class="yep" href="/yep" id="nope">Yep</a>';                   console.log('html:', html);
        html = html.replace(/<a .*?(class=".*?").*?(href=".*?").*?>/, '<a $2 $1>');  console.log('html:', html);
    }
    {
        const input = "One two three";  console.log('input:', input);
        console.log(input.replace(/two/, '($`)'));
        console.log(input.replace(/two/, '($&)'));
        console.log(input.replace(/two/, "($')"));
        console.log(input.replace(/two/, "($$)"));
    }

    console.log('17.16 함수를 이용한 교체');
    {
        const html = `<a class="foo" href="/foo" id="foo">Foo</a>\n` +
                     `<A href='/bar' Class="bar">Bar</a>\n` +
                     `<a onclick="javascript:alert('qux!')" href="/qux">Qux</a>`;
        console.log('html:\n', html);
        html.replace(/<a .*?>(.*?)<\/a>/ig, function(m, g1, offset) {
            console.log('m:', m);
            console.log(`<a> tag found at ${offset}. contents: ${g1}`);
        });
        function sanitizeATag(aTag) {
            console.log(`[sanitizeATag] aTag: ${aTag}`);
            const parts = aTag.match(/<a\s+(.*)?>(.*?)<\/a>/i);
            console.log(`[sanitizeATag] parts: ${parts}`);
            const attributes = parts[1].split(/\s+/);
            console.log(`[sanitizeATag] attributes: ${attributes}`);
            return '<a ' +
                   attributes.filter(attr => /^(?:class|id|href)[\s=]/i.test(attr)).join(' ') +
                   '>' +
                   parts[2] +
                   '</a>';
        }
        console.log(html.replace(/<a .*?>(.*?)<\/a>/ig, function(m) {
            console.log('m:', m);
            const s = sanitizeATag(m);
            console.log('s:', s);
            return s;
        }));
        console.log(html.replace(/<a .*?>(.*?)<\/a>/ig, sanitizeATag));
    }
})