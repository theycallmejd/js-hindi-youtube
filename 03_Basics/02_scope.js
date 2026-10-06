// <<< JavaScript Scope >>> //


// if(true){
//     const x = 1;
//     let y = 2;
//     var z = 3;

//     console.log(x, y, z);

// }
//     console.log(x);
//     console.log(y);
//     console.log(z);

// const x = 100;
// let y = 200;
// var z = 300;

// function xyz() {
//     const x = 10;
//     let y = 20;
//     var z = 30;

//     if (true) {
//         const x = 1;
//         let y = 2;
//         var z = 3;

//         console.log(x); // 1
//         console.log(y); // 2
//         console.log(z); // 3


//     }
//     console.log(x); // 10
//     console.log(y); // 20
//     console.log(z); // 30

// }

// xyz();

// console.log(x); // 100
// console.log(y); // 200
// console.log(z); // 300

// function one() {
//     const user1 = "JD"
//     function two() {
//         const user2 = "ZEDX"
//         console.log(user1);
//     }
//     // console.log(user2);
//     two();
// }

// // one();

// if (true) {
//     const username = "JD"
//     if (username === "JD") {
//         const website = "Instagram"
//         console.log(username + website);
//     }
//     // console.log(website);

// }

// console.log(website);


// ========================================================

// Function Declaration - Hoisting

console.log(addone(11));

function addone(num){
    return num+1;
}

// Function Expression

// console.log(addtwo(5)); // Cannot access 'addtwo' before initialization

const addtwo = function (num){
    return num + 2;
}

console.log(addtwo(5));