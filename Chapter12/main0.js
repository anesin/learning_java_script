$(document).ready(function() {
    'use strict';

    {
        const book = [
            "Twinkle, twinkle, little bat!",
            "How I wonder what you're at!",
            "Up above the world you fly,",
            "Like a tea tray in the sky.",
            "Twinkle, twinkle, little bat!",
            "How I wonder what you're at!",
        ];
        console.log(book);
        {
            const it = book.values();
            console.log(it);
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
            console.log(it.next());
        }
        {
            const it = book.values();
            console.log(it);
            let current = it.next();
            while (!current.done) {
                console.log(current.value);
                current = it.next();
            }
        }
        {
            const it1 = book.values();  console.log(it1);
            const it2 = book.values();  console.log(it2);
            console.log('it1.next() =', it1.next());
            console.log('it1.next() =', it1.next());
            console.log('it2.next() =', it2.next());
            console.log('it1.next() =', it1.next());
        }
    }
})