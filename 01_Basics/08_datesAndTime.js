//Dates

let date = new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toLocaleString());
// console.log(date.toString());
// console.log(date.toLocaleString("en-IN", {
//     timeZone: "Asia/Kolkata"
// }));

// let dateInMS = Date.now();
// // console.log(dateInMS)

// let dateInSec = Math.floor(dateInMS/1000);
// let dateInMin = Math.floor(dateInSec/60);
// let dateInHr = Math.floor(dateInMin/60);
// let dateInDays = Math.floor(dateInHr/24);
// let dateInYrs = Math.floor(dateInDays/365);

// console.log(dateInYrs);

console.log(`Date: ${date.getDate()}`);
console.log(`Months: ${date.getMonth()}`);
console.log(`Year: ${date.getFullYear()}`);
console.log(`Day: ${date.getDay()}`);



