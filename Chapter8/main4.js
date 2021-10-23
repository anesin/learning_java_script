$(document).ready(function() {
    'use strict';

    {
        const cart = [{name: 'Widget', price: 9.95}, {name: 'Gadget', price: 22.95}];
        console.log("const cart = [{name: 'Widget', price: 9.95}, {name: 'Gadget', price: 22.95}];");
        const names = cart.map(x => x.name);            console.log(names);
        const prices = cart.map(x => x.price);          console.log(prices);
        const discountPrices = cart.map(x => x.price * 0.8);  console.log(discountPrices);
    }

    {
        const items = ['Widget', 'Gadget'];
        console.log("const items = ['Widget', 'Gadget'];");
        const prices = [9.95, 22.95];
        const cart = items.map((x, i) => ({name: x, prices: prices[i]}));
        console.log(cart);
    }

    {
        const cards = [];
        console.log("const cards = [];");
        for (let suit of ['H', 'C', 'D', 'S'])
            for (let value = 1; value <= 13; value++)
                cards.push({suit, value});
        console.log(cards);

        console.log(cards.filter(c => c.value === 2));
        console.log(cards.filter(c => c.suit === 'D'));
        console.log(cards.filter(c => c.value > 10));
        console.log(cards.filter(c => 10 < c.value && c.suit === 'H'));

        console.log('function cardToString(c)');
        function cardToString(c) {
            const suits = {'H': '\u2665', 'C': '\u2663', 'D': '\u2666', 'S': '\u2660'};
            const values = {1: 'A', 11: 'J', 12: 'Q', 13: 'K'};
            for (let i = 2; i <= 10; i++)
                values[i] = i;
            return values[c.value] + suits[c.suit];
        }
        console.log(cards.filter(c => c.value === 2).map(cardToString));
        console.log(cards.filter(c => 10 < c.value && c.suit === 'H').map(cardToString));
    }
})