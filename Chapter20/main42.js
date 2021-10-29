const debug1 = require('./debug')('one');
const debug2 = require('./debug')('two');

debug1('start first debugger!');
debug2('start second debugger!');

setTimeout(function() {
    debug1('after some time...');
    debug2('what happens?');
}, 1000);