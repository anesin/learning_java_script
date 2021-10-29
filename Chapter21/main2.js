const obj = {foo: 'bar'};
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));


Object.defineProperty(obj, 'foo', {writable: false});
console.log(Object.getOwnPropertyDescriptor(obj, 'foo'));


'use strict';
// obj.foo = 3;
console.log(obj);


Object.defineProperty(obj, 'color', {
    get: function() { return this._color; },
    set: function(value) { this._color = value; },
});
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'color'));
obj.color = 'red';
console.log(obj);
console.log(Object.getOwnPropertyDescriptor(obj, 'color'));


Object.defineProperty(obj, 'name', {
    value: 'Cynthia',
    // enumerable: true
});
Object.defineProperty(obj, 'greet', {
    value: function() { return `Hello, my name is ${this.name}!`; }
})
console.log(obj);
console.log(obj.name);
console.log(obj.greet());


{
    const arr = [3, 1.5, 9, 2, 5.2];
    console.log(arr);
    arr.sum = function() { return this.reduce((a, x) => a + x); }
    arr.avg = function() { return this.sum() / this.length; }
    console.log(arr);
    Object.defineProperty(arr, 'sum', {enumerable: false});
    Object.defineProperty(arr, 'avg', {enumerable: false});
    console.log(arr);
}


{
    const arr = [3, 1.5, 9, 2, 5.2];
    console.log(arr);
    Object.defineProperty(arr, 'sum', {
        value: function() { return this.reduce((a, x) => a + x); },
        enumerable: false
    });
    Object.defineProperty(arr, 'avg', {
        value: function() { return this.sum() / this.length; },
        enumerable: false
    });
    console.log(arr);
}


{
    const arr = [3, 1.5, 9, 2, 5.2];
    console.log(arr);
    Object.defineProperties(arr, {
        sum: {
            value: function() { return this.reduce((a, x) => a + x); },
            enumerable: false
        },
        avg: {
            value: function() { return this.sum() / this.length; },
            enumerable: false
        }
    });
    console.log(arr);
}
