// function timeConvert(min) {
//     if(min <= 59) {
//     document.write("0:" + min)
//     }
// }
// timeConvert(32)


function makeTime(num) {
    var hours = Math.floor(num/60)
    var min = num % 60  // or num - (hours * 60))
    return hours + ':' + min
}

console.log(makeTime(433))