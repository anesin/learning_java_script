function evaluate(x, co) {
    return co.a + co.b*x + co.c*Math.pow(x, 2);
}

{
    const coefficients = {
        a: 1,
        b: 2,
        c: 5,
    }
    console.log(coefficients);
    console.log(evaluate(5, coefficients));
}


const coefficients = {
    a: 1,
    c: 3,
}
console.log(coefficients);
console.log(evaluate(5, coefficients));


{
    const betterCoefficients = new Proxy(coefficients, {
        get(target, key) {
            return target[key] || 0;
        },
    });
    console.log(betterCoefficients);
    console.log(betterCoefficients.a);
    console.log(betterCoefficients.b);
    console.log(betterCoefficients.c);
    console.log(betterCoefficients.d);
    console.log(betterCoefficients.anything);
    console.log(evaluate(5, betterCoefficients));
}


{
    const betterCoefficients = new Proxy(coefficients, {
        get(target, key) {
            if (!/^[a-z]$/.test(key))
                return target[key];
            return target[key] || 0;
        },
    });
    console.log(betterCoefficients);
    console.log(betterCoefficients.a);
    console.log(betterCoefficients.b);
    console.log(betterCoefficients.c);
    console.log(betterCoefficients.d);
    console.log(betterCoefficients.anything);
    console.log(evaluate(5, betterCoefficients));
}


const cook = {
    name: 'Walt',
    redPhosphorus: 100,
    water: 500,
};
console.log(cook);
const protectedCook = new Proxy(cook, {
    set(target, key, value) {
        if (key === 'redPhosphorus') {
            if (target.allowDangerousOperations)
                return target.redPhosphorus = value;
            else
                return console.log('Too dangerous!');
        }
        target[key] = value;
    }
});
console.log(protectedCook);

protectedCook.water = 550;
protectedCook.redPhosphorus = 150;
console.log(protectedCook);

protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150;
console.log(protectedCook);
