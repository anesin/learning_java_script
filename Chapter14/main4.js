$(document).ready(function () {
    'use strict';

    console.log('14.4 제너레이터');

    const fs = require('fs');

    function nfcall(f, ...args) {
        return new Promise(function(resolve, reject) {
            f.call(null, ...args, function(err, args) {
                if (err)
                    return reject(err);
                resolve(args.length < 2? args[0]: args);
            });
        });
    }

    function ptimeout(delay) {
        return new Promise(function(resolve, reject) {
            setTimeout(resolve, delay);
        });
    }

    function grun(g) {
        const it = g();
        (function iterate(val) {
            const x = it.next(val);
            if (!x.done) {
                if (x.value instanceof Promise)
                    x.value.then(iterate).catch(err => it.throw(err));
                else
                    setTimeout(iterate, 0, x.value);
            }
        })();
    }

    {
        function* theFutureIsNow() {
            const dataA = yield nfcall(fs.readFile, 'a.txt');
            const dataB = yield nfcall(fs.readFile, 'b.txt');
            const dataC = yield nfcall(fs.readFile, 'c.txt');
            yield ptimeout(6 * 1000);
            yield nfcall(fs.writeFile, 'd.txt', dataA + dataB + dataC);
        }
        grun(theFutureIsNow);
    }

    console.log('14.4.1 1보 전진과 2보 후퇴?');
    {
        function* theFutureIsNow() {
            const data = yield Promise.all([
                nfcall(fs.readFile, 'a.txt'),
                nfcall(fs.readFile, 'b.txt'),
                nfcall(fs.readFile, 'c.txt'),
            ]);
            yield ptimeout(6 * 1000);
            yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
        }
        grun(theFutureIsNow);
    }

    console.log('14.4.2 제너레이터 실행기를 직접 만들지 마세요');

    console.log('14.4.3 제너레이터 실행기와 예외 처리');
    {
        function* theFutureIsNow() {
            let data;
            try {
                data = yield Promise.all([
                    nfcall(fs.readFile, 'a.txt'),
                    nfcall(fs.readFile, 'b.txt'),
                    nfcall(fs.readFile, 'c.txt'),
                ]);
            }
            catch (err) {
                console.error('Unable to read one or more input files: ' + err.message);
                throw err;
            }
            yield ptimeout(6 * 1000);
            try {
                yield nfcall(fs.writeFile, 'd.txt', data[0] + data[1] + data[2]);
            }
            catch (err) {
                console.error('Unable to write output files: ' + err.message);
                throw err;
            }
        }
        grun(theFutureIsNow);
    }
})