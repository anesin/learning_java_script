$(document).ready(function() {
    'use strict';

    {
        const o = {
            name: 'Wallace',
            bark: function() { return 'Woof!'; }
        }
        console.log(o.bark());
    }

    {
        const o = {
            name: 'Wallace',
            bark() { return 'Woof!'; }
        }
        console.log(o.bark());
    }

    {
        const o = {
            name: 'Wallace',
            speak() { return `My name is ${this.name}!`; }
        }
        console.log(o.speak());

        const speak = o.speak;
        console.log(speak === o.speak);
        // console.log(speak());
    }

    // {
    //     const o = {
    //         name: 'Julie',
    //         greetBackwards: function() {
    //             function getReverseName() {
    //                 let nameBackwards = '';
    //                 for (let i = this.name.length - 1; 0 <= i; --i)
    //                     nameBackwards += this.name[i];
    //                 return nameBackwards;
    //             }
    //             return `${getReverseName()} si eman ym ,olleH`;
    //         },
    //     };
    //     console.log(o.greetBackwards());
    // }
    {
        const o = {
            name: 'Julie',
            greetBackwards: function() {
                const self = this;
                function getReverseName() {
                    let nameBackwards = '';
                    for (let i = self.name.length - 1; 0 <= i; --i)
                        nameBackwards += self.name[i];
                    return nameBackwards;
                }
                return `${getReverseName()} si eman ym ,olleH`;
            },
        };
        console.log(o.greetBackwards());
    }
});