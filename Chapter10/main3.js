$(document).ready(function() {
    'use strict';

    console.log('10.3 셋');
    {
        const roles = new Set();
        roles.add('User');   console.log(roles);
        roles.add('Admin');  console.log(roles);
        console.log(roles.size);
    
        roles.add('User');   console.log(roles);
        console.log(roles.size);
    
        console.log(roles.delete('Admin'));
        console.log(roles);
        console.log(roles.delete('Admin'));
        console.log(roles);
    }

    console.log('10.4 위크셋');
    {
        const naughty = new WeakSet();  console.log(naughty);
        const children = [{name: 'Suzy'}, {name: 'Derek'}];
        naughty.add(children[1]);  console.log(naughty);
        for (let child of children) {
            console.log(child);
            if (naughty.has(child))
                console.log(`Coal for ${child.name}!`);
            else
                console.log(`Presents for ${child.name}!`);
        }
    }
})