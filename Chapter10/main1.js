$(document).ready(function() {
    'use strict';

    console.log('10.1 맵');
    const u1 = {name: 'Cynthia'};  console.log(u1);
    const u2 = {name: 'Jackson'};  console.log(u2);
    const u3 = {name: 'Olivia'};   console.log(u3);
    const u4 = {name: 'James'};    console.log(u4);

    const userRoles = new Map();
    console.log(userRoles);
    userRoles.set(u1, 'User');
    userRoles.set(u2, 'User');
    userRoles.set(u3, 'Admin');
    console.log(userRoles);

    const userRoles2 = new Map();
    userRoles2.set(u1, 'User')
              .set(u2, 'User')
              .set(u3, 'Admin');
    console.log(userRoles2);

    const userRoles3 = new Map([
        [u1, 'User'],
        [u2, 'User'],
        [u3, 'Admin'],
    ]);
    console.log(userRoles3);

    console.log(userRoles.get(u2));

    console.log(userRoles.has(u1));
    console.log(userRoles.get(u1));
    console.log(userRoles.has(u4));
    console.log(userRoles.get(u4));

    console.log(userRoles.get(u1));
    userRoles.set(u1, 'Admin');
    console.log(userRoles.get(u1));

    console.log(userRoles.size);

    console.log('for (let u of userRoles.keys())');
    for (let u of userRoles.keys())
        console.log(`\tu.name: ${u.name}`);

    console.log('for (let r of userRoles.values())');
    for (let r of userRoles.values())
        console.log(`\tr: ${r}`);

    console.log('for (let ur of userRoles.entries())');
    for (let ur of userRoles.entries())
        console.log(`\t${ur[0].name}: ${ur[1]}`);

    console.log('for (let [u, r] of userRoles.entries())');
    for (let [u, r] of userRoles.entries())
        console.log(`\t${u.name}: ${r}`);

    console.log('for (let [u, r] of userRoles)');
    for (let [u, r] of userRoles)
        console.log(`\t${u.name}: ${r}`);
    
    console.log([...userRoles.values()]);

    userRoles.delete(u2);
    console.log(userRoles.size);

    userRoles.clear();
    console.log(userRoles.size);
})