const student = {
    studentName : "Jay Dev Das",
    rollNo : 12,

    welcomeMessage : function(){
        console.log(`Welcome to the course ${this.studentName}.`);
        
    }
}

// student.welcomeMessage();
// student.studentName = "JD";
// student.welcomeMessage();

// console.log(this);

// function chai(){
//     console.log(this);
    
// }

// chai();

// const chai = function(){
//     let username = "ZEDX"
//     console.log(this.username);
// }

// chai()

// const chai = () => {
//     let username = "ZEDX"
//     console.log(this.username);
// }

// chai();

// const addTwo = (n1,n2) => {
//     return n1 + n2;
// }

// console.log(addTwo(1,2));

// const addTwo = (n1,n2) => n1 + n2;

// console.log(addTwo(1,2));

// const addTwo = (n1,n2) => (n1 + n2); // if we are  using curly braces then we must give a return statement.

// console.log(addTwo(1,2));

// // to create an object

const addTwo = (n1,n2) => ({username : "JD"}); 

console.log(addTwo(1,2));
