$(document).ready(function() {
    'use strict';

    let heating = true;    console.log('heating =', heating);
    let cooling = false;   console.log('cooling =', cooling);

    const RED = Symbol("The color of a sunset!");
    const ORANGE = Symbol("The color of a sunset!");
    console.log('RED == ORANGE', RED == ORANGE);

    let currentTemp;          console.log('currentTemp = ', currentTemp);
    const targetTemp = null;  console.log('targetTemp = ', targetTemp);
    currentTemp = 19.5;       console.log('currentTemp = ', currentTemp);
    currentTemp = undefined;  console.log('currentTemp = ', currentTemp);
});
