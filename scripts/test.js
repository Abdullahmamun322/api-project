// function getTimeString(time){
//     return `${time} second ago`;
// }

// console.log(getTimeString(4320));

function getTimeString(time){
    //Get Hour and rest seconds
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    remainingSecond = remainingSecond % 60;
    return `${hour} hour ${minute} minute ${remainingSecond} second ago`;
}

console.log(getTimeString(7865));
