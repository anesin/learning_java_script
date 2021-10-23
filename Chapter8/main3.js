$(document).ready(function() {
    'use strict';

    {
        const o = {name: 'Jerry'};
        const arr = [1, 5, 'a', o, true, 5, [1, 2], '9'];
        console.log(arr.indexOf(5));
        console.log(arr.lastIndexOf(5));
        console.log(arr.indexOf('a'));
        console.log(arr.lastIndexOf('a'));
        console.log(arr.indexOf({name: 'Jerry'}));
        console.log(arr.indexOf(o));
        console.log(arr.indexOf([1, 2]));
        console.log(arr.indexOf('9'));
        console.log(arr.indexOf(9));

        console.log(arr.indexOf('a', 5));
        console.log(arr.indexOf(5, 5));
        console.log(arr.lastIndexOf(5, 4));
        console.log(arr.lastIndexOf(true, 3));
    }

    {
        const arr = [{id: 5, name: 'Judith'}, {id: 7, name: 'Francis'}];
        console.log("const arr = [{id: 5, name: 'Judith'}, {id: 7, name: 'Francis'}];");
        console.log(arr.findIndex(o => o.id === 5));
        console.log(arr.findIndex(o => o.name === 'Francis'));
        console.log(arr.findIndex(o => o === 3));
        console.log(arr.findIndex(o => o.id === 17));

        console.log(arr.find(o => o.id === 5));
        console.log(arr.find(o => o.id === 2));
    }

    {
        const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];
        console.log("const arr = [1, 17, 16, 5, 4, 16, 10, 3, 49];");
        console.log(arr.find((x, i) => 2 < i && Number.isInteger(Math.sqrt(x))));
    }

    {
        console.log("class Person { ... }");
        class Person {
            constructor(name) {
                this.name = name;
                this.id = Person.nextId++;
            }
        }
        Person.nextId = 0;
        const jamie  = new Person("Jamie"),
              juliet = new Person('Juliet'),
              peter  = new Person('Peter'),
              jay    = new Person('Jay');
        const arr = [jamie, juliet, peter, jay];
        console.log(arr.find(p => p.id === juliet.id));
        console.log(arr.find(function(p) {
            return p.id === this.id
        }, juliet));
    }

    {
        const arr = [5, 7, 12, 15, 17];
        console.log("const arr = [5, 7, 12, 15, 17];");
        console.log(arr.some(x => x % 2 === 0));
        console.log(arr.some(x => Number.isInteger(Math.sqrt(x))));
    }

    {
        const arr = [4, 6, 16, 36];
        console.log("const arr = [4, 6, 16, 36];");
        console.log(arr.every(x => x % 2 === 0));
        console.log(arr.every(x => Number.isInteger(Math.sqrt(x))));
    }
})