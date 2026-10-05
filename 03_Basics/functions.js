// function sayMyName(){
//     console.log("J");
//     console.log("A");
//     console.log("Y");
//     console.log("D");
//     console.log("E");
//     console.log("V");
//     console.log("D");
//     console.log("A");
//     console.log("S");
// }

// sayMyName();

// function addTwoNumbers(n1,n2){
//         console.log(n1+n2);
// }

// addTwoNumbers(10,40)

// function loginUserMessage(username = "I Miss Her"){
//     if(!username){ // We can also write if(username === undefined)
//         console.log("Please enter a user name.");
//         return
//     }
//     return `${username} logged in.`
// }

// console.log(loginUserMessage("Jay Dev Das"));
// console.log(loginUserMessage())


function greet() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}

execute(greet);