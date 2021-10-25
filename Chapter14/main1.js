$(document).ready(function() {
    'use strict';

    console.log('14.1 비유');

    console.log('14.2 콜백');
    // {
    //     console.log('Before timeout: ' + new Date());
    //     function f() {
    //         console.log('1 After timeout: ' + new Date());
    //     }
    //     setTimeout(f, 3 * 1000);  // 3 sec
    //     setTimeout(function() {
    //         console.log('2 After timeout: ' + new Date());
    //     }, 6 * 1000);
    //     console.log('I happen after setTimeout!');
    //     console.log('Me too!');
    // }

    console.log('14.2.1 setInterval과 clearInterval');
    // {
    //     const start = new Date();
    //     let i = 0;
    //     const intervalId = setInterval(function() {
    //         let now = new Date();
    //         if (now.getMinutes() !== start.getMinutes() || 3 < ++i) {
    //             console.log('Done');
    //             return clearInterval(intervalId);
    //         }
    //         console.log(`${i}: ${now}`);
    //     }, 2 * 1000);
    // }

    console.log('14.2.2 스코프와 비동기적 실행');
    // {
    //     function countdown() {
    //         let i;
    //         console.log('Countdown:');
    //         for (i = 5; 0 <= i; --i) {
    //             setTimeout(function() {
    //                 console.log(i === 0? 'GO!': i);
    //             }, (5-i) * 1000);
    //         }
    //     }
    //     countdown();
    // }
    // {
    //     function countdown() {
    //         console.log('Countdown:');
    //         for (let i = 5; 0 <= i; --i) {
    //             setTimeout(function() {
    //                 console.log(i === 0? 'GO!': i);
    //             }, (5-i) * 1000);
    //         }
    //     }
    //     countdown();
    // }

    console.log('14.2.3 오류 우선 콜백');
    {
        const fs = require('fs');

        const fname = 'may_or_may_not_exist.txt';
        fs.readFile(fname, function(err, data) {
            if (err)
                return console.error(`error reading file ${fname}: ${err.message}`);
            console.log(`${fname} contents: ${data}`);
        });
    }

    console.log('14.2.4 콜백 헬');
    {
        const fs = require('fs');

        fs.readFile('a.txt', function(err, dataA) {
            if (err)
                console.error(err);
            fs.readFile('b.txt', function(err, dataB) {
                if (err)
                    console.error(err);
                fs.readFile('c.txt', function(err, dataC) {
                    if (err)
                        console.error(err);
                    setTimeout(function() {
                        fs.writeFile('d.txt', dataA + dataB + dataC, function(err) {
                            if (err)
                                console.error(err);
                        });
                    }, 60 * 1000);
                });
            });
        });
    }
    {
        const fs = require('fs');

        function readSketchyFile() {
            try {
                fs.readFile('does_not_exist.txt', function(err, data) {
                    if (err)
                        throw err;
                });
            }
            catch (err) {
                console.log('warning: minor issue occurred, program continuing');
            }
        }
        readSketchyFile();
    }
})