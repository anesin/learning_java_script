$(document).ready(function () {
    'use strict';

    console.log('14.3 프라미스');

    console.log('14.3.1 프라미스 만들기');
    // function countdown(seconds) {
    //     return new Promise(function(resolve, reject) {
    //         for (let i = seconds; 0 <= i; --i) {
    //             setTimeout(function() {
    //                 if (0 < i)
    //                     console.log(i + '...');
    //                 else
    //                     resolve(console.log('GO!'));
    //             }, (seconds - i) * 1000);
    //         }
    //     });
    // }

    console.log('14.3.2 프라미스 사용');
    {
        // countdown(3).then(
        //     function() {
        //         console.log('countdown completed successfully');
        //     },
        //     function(err) {
        //         console.log('countdown experienced an error: ' + err.message);
        //     }
        // );
    }
    {
        // const p = countdown(3);
        // p.then(function() {
        //     console.log('countdown completed successfully');
        // });
        // p.catch(function(err) {
        //     console.log('countdown experienced an error: ' + err.message);
        // });
    }
    {
        // function countdown(seconds) {
        //     return new Promise(function(resolve, reject) {
        //         for (let i = seconds; 0 <= i; --i) {
        //             setTimeout(function() {
        //                 if (i !== 0 && i % 3 === 0)
        //                     return reject(new Error('Oh my god'));
        //                 if (0 < i)
        //                     console.log(i + '...');
        //                 else
        //                     resolve(console.log('GO!'));
        //             }, (seconds - i) * 1000);
        //         }
        //     });
        // }

        // countdown(6).then(
        //     function() {
        //         console.log('countdown completed successfully');
        //     },
        //     function(err) {
        //         console.log('countdown experienced an error: ' + err.message);
        //     }
        // );

        // const p = countdown(7);
        // p.then(function() {
        //     console.log('countdown completed successfully');
        // });
        // p.catch(function(err) {
        //     console.log('countdown experienced an error: ' + err.message);
        // });
    }

    console.log('14.3.3 이벤트');
    {
        // const EventEmitter = require('events').EventEmitter;
        // class CountDown extends EventEmitter {
        //     constructor(seconds, superstitious) {
        //         super();
        //         this.seconds = seconds;
        //         this.superstitious = superstitious;
        //     }
        //     go() {
        //         const countdown = this;
        //         return new Promise(function(resolve, reject) {
        //             for (let i = countdown.seconds; 0 <= i ; --i) {
        //                 setTimeout(function() {
        //                     if (countdown.superstitious && i === 13)
        //                         return reject(new Error('Oh mu god'));
        //                     countdown.emit('tick', i);
        //                     if (i == 0)
        //                         resolve();
        //                 }, (countdown.seconds - i)*1000);
        //             }
        //         });
        //     }
        // }

        // const c = new CountDown(5);
        // c.on('tick', function(i) {
        //     if (0 < i)
        //         console.log(i + '...');
        // });
        // c.go()
        //  .then(function() { console.log('GO!'); })
        //  .catch(function(err) { console.error(err.message); });
    }
    {
        // const EventEmitter = require('events').EventEmitter;
        // class CountDown extends EventEmitter {
        //     constructor(seconds, superstitious) {
        //         super();
        //         this.seconds = seconds;
        //         this.superstitious = superstitious;
        //     }
        //     go() {
        //         const countdown = this;
        //         const timeoutIds = [];
        //         return new Promise(function(resolve, reject) {
        //             for (let i = countdown.seconds; 0 <= i ; --i) {
        //                 timeoutIds.push(setTimeout(function() {
        //                     if (countdown.superstitious && i === 13) {
        //                         timeoutIds.forEach(clearTimeout);
        //                         return reject(new Error('Oh mu god'));
        //                     }
        //                     countdown.emit('tick', i);
        //                     if (i == 0)
        //                         resolve();
        //                 }, (countdown.seconds - i)*1000));
        //             }
        //         });
        //     }
        // }

        // const c = new CountDown(15, true);
        // c.on('tick', function(i) {
        //     if (0 < i)
        //         console.log(i + '...');
        // });
        // c.go()
        //  .then(function() { console.log('GO!'); })
        //  .catch(function(err) { console.error(err.message); });
    }

    console.log('14.3.4 프라미스 체인');
    {
        // const EventEmitter = require('events').EventEmitter;
        // class CountDown extends EventEmitter {
        //     constructor(seconds, superstitious) {
        //         super();
        //         this.seconds = seconds;
        //         this.superstitious = superstitious;
        //     }
        //     go() {
        //         const countdown = this;
        //         const timeoutIds = [];
        //         return new Promise(function(resolve, reject) {
        //             for (let i = countdown.seconds; 0 <= i ; --i) {
        //                 timeoutIds.push(setTimeout(function() {
        //                     if (countdown.superstitious && i === 13) {
        //                         timeoutIds.forEach(clearTimeout);
        //                         return reject(new Error('Oh mu god'));
        //                     }
        //                     countdown.emit('tick', i);
        //                     if (i == 0)
        //                         resolve();
        //                 }, (countdown.seconds - i)*1000));
        //             }
        //         });
        //     }
        // }

        // function launch() {
        //     return new Promise(function(resolve, reject) {
        //         console.log('Lift off!');
        //         setTimeout(function() {
        //             resolve('In orbit!');
        //         }, 2 * 1000);
        //     });
        // }

        // const c = new CountDown(5).on('tick', i => console.log(i + '...'));
        // c.go()
        //  .then(launch)
        //  .then(function(msg) { console.log(msg); })
        //  .catch(function(err) { console.error('Houston, we have a  problem ...'); });
    }

    console.log('14.3.5 결정되지 않는 프라미스 방지하기');
    {
        const EventEmitter = require('events').EventEmitter;
        class CountDown extends EventEmitter {
            constructor(seconds, superstitious) {
                super();
                this.seconds = seconds;
                this.superstitious = superstitious;
            }
            go() {
                const countdown = this;
                const timeoutIds = [];
                return new Promise(function(resolve, reject) {
                    for (let i = countdown.seconds; 0 <= i ; --i) {
                        timeoutIds.push(setTimeout(function() {
                            if (countdown.superstitious && i === 13) {
                                timeoutIds.forEach(clearTimeout);
                                return reject(new Error('Oh my god'));
                            }
                            countdown.emit('tick', i);
                            if (i == 0)
                                resolve();
                        }, (countdown.seconds - i)*1000));
                    }
                });
            }
        }

        function launch() {
            return new Promise(function(resolve, reject) {
                if (Math.random() < 0.5)
                    return;
                console.log('Lift off!');
                setTimeout(function() {
                    resolve('In orbit!');
                }, 2 * 1000);
            });
        }

        function addTimeout(fn, timeout) {
            if (timeout === undefined)
                timeout = 1000;
            return function(...args) {
                return new Promise(function(resolve, reject) {
                    const tid = setTimeout(reject, timeout, new Error('promise timed out'));
                    fn(...args)
                        .then(function(...args) {
                            clearTimeout(tid);
                            resolve(...args);
                        })
                        .catch(function(...args) {
                            clearTimeout(tid);
                            reject(...args);
                        })
                });
            };
        }

        const c = new CountDown(15).on('tick', i => console.log(i + '...'));
        c.go()
         .then(addTimeout(launch, 11*1000))
         .then(function(msg) { console.log(msg); })
         .catch(function(err) { console.error('Houston, we have a  problem: ' + err.message); });
    }
})