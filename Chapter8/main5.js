$(document).ready(function() {
    'use strict';

    {
        const arr = [5, 7, 2, 4];
        console.log('const arr = [5, 7, 2, 4];');
        const sum1 = arr.reduce((a, x) => a += x, 0);
        console.log(sum1);
        const sum2 = arr.reduce((a, x) => a += x);
        console.log(sum2);
    }

    {
        console.log("const words = [ ... ];");
        const words = [
            "Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November",
            "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"
        ];
        const alphabetical = words.reduce((a, x) => {
            if (!a[x[0]])
                a[x[0]] = [];
            return a;
        }, {});
        console.log(alphabetical);
    }

    {
        console.log("const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];");
        const data = [3.3, 5, 7.2, 12, 4, 6, 10.3];
        const stats = data.reduce((a, x) => {
            a.N++;
            let delta = x - a.mean;
            a.mean += delta / a.N;
            a.M2 += delta*(x - a.mean);
            return a;
        }, {N: 0, mean: 0, M2: 0});
        console.log(stats);
        if (2 < stats.N) {
            stats.variance = stats.M2 / (stats.N - 1);
            stats.stdev = Math.sqrt(stats.variance);
            console.log(stats);
        }
    }

    {
        console.log("const words = [ ... ];");
        const words = [
            "Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November",
            "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"
        ];
        const longWords = words.reduce((a, w) => 6 < w.length? a + ' ' + w: a, '').trim();
        console.log(longWords);
        console.log(words.reduce((a, w) => 6 < w.length? a + ' ' + w: a, ''));
    }
})