// Date

let myDate = new Date()
// console.log(typeof myDate);  // object
// console.log(myDate);  // 2025-06-20T07:47:40.894Z
// console.log(myDate.toDateString()); // Fri Jun 20 2025
// console.log(myDate.toLocaleString()); // 20/6/2025, 1:20:54 pm
// console.log(myDate.toLocaleTimeString()); // 1:20:54 pm
// console.log(myDate.toISOString()); // 2025-06-20T07:50:54.363Z
// console.log(myDate.toJSON()); // 2025-06-20T07:50:54.363Z

// let myCreatedDate = new Date(2020, 1, 27)
// let myCreatedDate = new Date(2020, 1, 27, 5, 2)
// let myCreatedDate = new Date(2020, 1, 27, 5, 2, 35)
// let myCreatedDate = new Date("2020-02-27")
// let myCreatedDate = new Date("02-27-2020")
// console.log(myCreatedDate.toLocaleString());


let newDate = new Date()
console.log(newDate); // 2025-06-20T08:09:22.931Z
// console.log(newDate.getDay()); // 5
// console.log(newDate.getDate()); // 20
console.log(newDate.getMonth()); // 5 because start with 0
console.log(newDate.getTime()); // 1750407158132 in milisecond

newDate.toLocaleString('default', {
    weekday: "long",
    day: myDate
})




