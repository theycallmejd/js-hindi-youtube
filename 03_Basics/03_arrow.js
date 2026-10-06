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

console.log(this);
