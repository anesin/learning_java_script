$(document).ready(function() {
    'use strict';

    console.log('13.1 서브루틴으로서의 함수');
    {
        function printLeapYearStatus() {
            const year = new Date().getFullYear();
            if      (year%4 !== 0)   console.log(`${year} is NOT a leap year.`);
            else if (year%100 !== 0) console.log(`${year} IS a leap year.`);
            else if (year%400 !== 0) console.log(`${year} is NOT a leap year.`);
            else                     console.log(`${year} IS a leap year.`);
        }
        printLeapYearStatus();
    }

    console.log('13.2 값을 반환하는 서브루틴으로서의 함수');
    {
        function isCurrentYearLeapYear() {
            const year = new Date().getFullYear();
            if      (year%4 !== 0)   return false;
            else if (year%100 !== 0) return true;
            else if (year%400 !== 0) return false;
            else                     return true;
        }
        const daysInFeb = isCurrentYearLeapYear()? 29: 28;
        const daysInMonth = [31, daysInFeb, 31, 30, 31, 30,
                             31, 31, 30, 31, 30, 31];
        console.log(daysInMonth);
        if (isCurrentYearLeapYear())
            console.log('Is is a leap year.');
    }

    console.log('13.3 함수로서의 함수');
    {
        {
            const colors = ['red', 'orange', 'yellow', 'green',
                            'blue', 'indigo', 'violet'];
            let colorIndex = -1;
            function getNextRainbowColor() {
                if (colors.length <= ++colorIndex)
                    colorIndex = 0;
                return colors[colorIndex];
            }
            for (let i = 0; i <= colors.length; ++i)
                console.log(getNextRainbowColor());
        }
        {
            function isLeapYear(year) {
                if      (year%4 !== 0)   return false;
                else if (year%100 !== 0) return true;
                else if (year%400 !== 0) return false;
                else                     return true;
            }
            const year = new Date().getFullYear();
            if (isLeapYear(year)) console.log(`${year} is NOT a leap year.`);
            else                  console.log(`${year} IS a leap year.`);
        }
        {
            const getNextRainbowColorPure = (function() {
                const colors = ['red', 'orange', 'yellow', 'green',
                                'blue', 'indigo', 'violet'];
                let colorIndex = -1;
                return function() {
                    if (colors.length <= ++colorIndex)
                        colorIndex = 0;
                    return colors[colorIndex];
                };
            })();
            for (let i = 0; i <= 10/*colors.length*/; ++i)
                console.log(getNextRainbowColorPure());
            // setInterval(function() {
            //     document.querySelector('.rainbow')
            //             .style['background-color'] = getNextRainbowColorPure();
            // }, 500);
        }
        {
            function getNextRainbowColorIterator() {
                const colors = ['red', 'orange', 'yellow', 'green',
                                'blue', 'indigo', 'violet'];
                let colorIndex = -1;
                return {
                    next() {
                        // if (colors.length <= ++colorIndex)
                        //     colorIndex = 0;
                        if (colors.length <= ++colorIndex)
                            return {value: undefined, done: true};
                        return {value: colors[colorIndex], done: false};
                    }
                };
            }
            const rainbowIterator = getNextRainbowColorIterator();
            let rainbow = rainbowIterator.next();
            while (!rainbow.done) {
                console.log(rainbow.value);
                rainbow = rainbowIterator.next();
            }
            // setInterval(function() {
            //     document.querySelector('.rainbow')
            //             .style['background-color'] = rainbowIterator.next().value;
            // }, 500);
        }
    }
})