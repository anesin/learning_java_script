$(document).ready(function() {
    'use strict';

    let currentTempC = 22;  // 섭씨온도
    console.log('currentTempC =', currentTempC);

    currentTempC = 22.5;
    console.log('currentTempC =', currentTempC);

    let targetTempC, room1 = "conference_room_a", room2 = "lobby";
    console.log('targetTempC =', targetTempC);
    console.log('room1 =', room1);
    console.log('room2 =', room2);

    const ROOM_TEMP_C = 21.5, MAX_TEMP_C = 30;
    console.log('ROOM_TEMP_C =', ROOM_TEMP_C);
    console.log('MAX_TEMP_C =', MAX_TEMP_C);

    let currentRoom = room1;
    // currentRoom = conference_room_a;
});
