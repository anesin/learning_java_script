'use strict';

console.log('--------------------- FREEZING ---------------------');
const appInfo = {
    company: 'White knight Software, Inc.',
    version: '1.3.5',
    buildId: '0a995448-ead4-4a8b-b050-9c9083279ea2',
    copyright() {
        return `@ ${new Date().getFullYear()}, ${this.company}`;
    },
};
console.log(appInfo);
console.log(Object.isFrozen(appInfo));
Object.freeze(appInfo);
console.log(Object.isFrozen(appInfo));

// appInfo.newProp = 'test';
// delete appInfo.company;
// appInfo.company = 'test';
// Object.defineProperty(appInfo, 'company', {enumerable: false});


console.log('--------------------- SEALING ---------------------');
class Logger {
    constructor(name) {
        this.name = name;
        this.log = [];
    }
    add(entry) {
        this.log.push({
            log: entry,
            timestamp: Date.now(),
        });
    }
}

const log = new Logger("Captain's Log");
console.log(log);
console.log(Object.isSealed(log));
Object.seal(log);
console.log(Object.isSealed(log));

log.name = "Captain's Boring Log";
log.add('Another boring day at sea...');
console.log(log);

// log.newProp = 'test';
// delete log.name;
// Object.defineProperty(log, 'log', {enumerable: false});


console.log('--------------------- PREVENTING EXTENSION ---------------------');
const log2 = new Logger("First Mate's Log");
console.log(log2);
console.log(Object.isExtensible(log2));
Object.preventExtensions(log2);
console.log(Object.isExtensible(log2));

log2.name = "First Mate's Boring Log";
log2.add('Another boring day at sea...');
console.log(log2);

// log2.newProp = 'test';
delete log2.name;
console.log(log2);
console.log(Object.getOwnPropertyDescriptor(log2, 'log'));
Object.defineProperty(log2, 'log', {enumerable: false});
console.log(Object.getOwnPropertyDescriptor(log2, 'log'));
