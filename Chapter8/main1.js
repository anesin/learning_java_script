$(document).ready(function() {
    'use strict';

    // 배열 리터럴
    const arr1 = [1, 2, 3];
    const arr2 = ["one", 2, "three"];
    const arr3 = [[1, 2, 3], ["one", 2, "three"]];
    const arr4 = [
        {name: 'Fred', type: 'object', luchNumbers: [5, 17, 13]},
        [
            {name: 'Susan', type: 'object'},
            {name: 'Anthony', type: 'object'},
        ],
        1,
        function() { return 'arrays can contain functions too'; },
        "three",
    ];
    console.log('arr1 =', arr1);
    console.log('arr2 =', arr2);
    console.log('arr3 =', arr3);
    console.log('arr4 =', arr4);

    // 배열 요소에 접근하기
    console.log('arr1[0] =', arr1[0]);
    console.log('arr1[2] =', arr1[2]);
    console.log('arr3[1] =', arr3[1]);
    console.log('arr4[1][0] =', arr4[1][0]);

    // 배열 길이
    console.log('arr1.length =', arr1.length);
    console.log('arr4.length =', arr4.length);
    console.log('arr4[1].length =', arr4[1].length);

    // 배열 길이 늘리기
    arr1[4] = 5;
    console.log('arr1 =', arr1);
    console.log('arr1.length =', arr1.length);

    console.log('arr2[10] =', arr2[10]);
    console.log('arr2.length =', arr2.length);

    // Array 생성자 (거의 사용하지 않음)
    const arr5 = new Array();         console.log('arr5 =', arr5);
    const arr6 = new Array(1, 2, 3);  console.log('arr6 =', arr6);
    const arr7 = new Array(2);        console.log('arr7 =', arr7);
    const arr8 = new Array("2");      console.log('arr8 =', arr8);
})